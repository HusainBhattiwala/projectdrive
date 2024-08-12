/* eslint-disable camelcase */
import {
  DM_Sans,
  Didact_Gothic,
  Lato,
  Manrope,
  Montserrat,
  Roboto,
} from 'next/font/google';
import 'app/globals.css';
import GoogleAnalytics from 'components/utils/GoogleAnalytics';
import { LoginProvider } from 'context/LoginContext';
import { UtilityProvider } from 'context/UtilityContext';
// import Script from 'next/script';
import Providers from './Providers';

// No need to import Helvetica Neue as it's a system font
const montserrat = Montserrat({
  subsets: ['latin'],
});
const robo = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-robo',
});
const manrope = Manrope({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});
const lato = Lato({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});
const gothic = Didact_Gothic({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gothic',
});
const sans = DM_Sans({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-GB"
      className={`${montserrat.className} ${robo.variable} ${manrope.variable} ${lato.variable} ${gothic.variable} ${sans.variable}`}
      style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: '400' }}
    >
      <head>
        <GoogleAnalytics
          GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11274527865" />
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11274527865');
        `,
        }}
        />
      </head>
      <body className="overflow-x-hidden">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Providers>
          <LoginProvider>
            <UtilityProvider>
              {children}
              <div id="mainModalContainer" />
            </UtilityProvider>
          </LoginProvider>
        </Providers>
      </body>
    </html>
  );
}
