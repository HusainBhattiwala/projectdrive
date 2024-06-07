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
    >
      {/* <Script id="tawk" strategy="lazyOnload">
        {
          `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/657af4a607843602b801f828/1hhk4nas7';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();`
        }
      </Script> */}
      {/* <Script id="tawk" strategy="lazyOnload">
        {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/657af4a607843602b801f828/1hhk4nas7';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
        `}
      </Script> */}
      <GoogleAnalytics
        GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID}
      />
      <body className="overflow-x-hidden">
        <noscript
          // eslint-disable-next-line react/no-danger
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
