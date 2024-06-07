// import AuthButtons from 'app/auth/signin/AuthButtons';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
// import { redirect } from 'next/navigation';
import { authOptions } from 'pages/api/auth/[...nextauth]';
// import api from '../utils/api';
import SocialLogin from './SocialLogin';

export const dynamic = 'force-dynamic';

const fetchAuthProviders = async () => {
  const session = await getServerSession(authOptions);

  // if (session) {
  //   // redirect('/login-demo');
  //   const response = api.post('/auth/social', {
  //     useremailid: 'sjdgof',
  //     name: 'hdsgfkg',
  //     auth_type: 'google',
  //   });
  //   console.log('response', response);
  // }

  const providers = await getProviders();

  return {
    providers: Object.values(providers) ?? [],
    session,
  };
};

export default async function AuthServerComp() {
  const { providers, session } = await fetchAuthProviders();
  console.log('providers, session', providers, session);

  return (
    <div className="py-20">
      {/* <AuthButtons providers={providers} /> */}
      <SocialLogin providers={providers} />
    </div>
  );
}
