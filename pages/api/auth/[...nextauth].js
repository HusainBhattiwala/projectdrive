/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import api from 'components/utils/api';
// import authAdapter from './authAdapter';
export const authOptions = {
  // adapter: authAdapter,
  pages: {
    signIn: '/login',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
          loginType: 'google',
        },
      },
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
    }),
  ],
  callbacks: {
    async jwt({
      token, account, session, trigger,
    }) {
      if (trigger === 'update' && session?.rolDriveToken) {
        console.log('trigger =', trigger, session);
        token.rolDriveToken = session?.rolDriveToken;
        token.isNewUser = session?.isNewUser || false;
        return token;
      }

      // if (trigger === 'update' && session?.usermobileno && session?.usercountrycode) {
      if (trigger === 'update') {
        token.mobile = session?.usermobileno;
        token.countryCode = session?.usercountrycode;

        const socialAuthPayload = {
          fname: session?.user?.name?.split(' ')?.[0],
          lname: session?.user?.name?.split(' ')?.[1],
          useremailid: session?.user.email,
          authtype: 'GOOGLE',
          usermobileno: token.mobile,
          usercountrycode: token.countryCode,
          usertype: 'PRIVATE_CLIENT',
        };
        const response = await api.post('/auth/social', socialAuthPayload);
        token.rolDriveToken = response?.data?.Authorization;
        sessionStorage.setItem('token', token.rolDriveToken);
        return token;
      }
      if (account) {
        token.provider = account.provider;
        const socialAuthPayload = {
          fname: token.name.split(' ')[0],
          lname: token.name.split(' ')[1],
          useremailid: token.email,
          authtype: account.provider.toUpperCase(),
          usertype: 'PRIVATE_CLIENT',
        };
        const userExists = await api.post('/auth/check', { email: token.email });
        console.log('userExists =', userExists);
        if (userExists?.data?.exists === 1) {
          const response = await api.post('/auth/social', socialAuthPayload);
          console.log('userExists response =', response);
          token.mobile = response?.data?.usermobileno;
          token.countryCode = response?.data?.usercountrycode;
          token.rolDriveToken = response?.data?.Authorization;
          token.isNewUser = false;
        } else {
          const tempSocialAuthPayload = {
            fname: token.name.split(' ')[0],
            lname: token.name.split(' ')[1],
            useremailid: token.email,
            authtype: account.provider.toUpperCase(),
            usertype: 'PRIVATE_CLIENT',
          };
          const response = await api.post('/auth/social/temp', tempSocialAuthPayload);
          console.log('response', response);
          token.mobile = response?.data?.usermobileno;
          token.countryCode = response?.data?.usercountrycode;
          token.rolDriveToken = response?.data?.Authorization;
          token.isNewUser = true;
        }
      }
      return token;
    },
    async session({ session, token }) {
      console.log('token', token);
      session.user = {
        ...session.user,
        provider: token.provider,
        mobile: token?.mobile || '',
        countryCode: token?.countryCode || '',
        rolDriveToken: token.rolDriveToken,
        isNewUser: token.isNewUser,
      };
      return session;
    },
  },
};
export default NextAuth(authOptions);
