// eslint-disable-next-line import/no-extraneous-dependencies
import { Toaster } from 'react-hot-toast';
import Footer from 'rolnew/comp/Footer';
import './global.css';
import Navbar from 'rolnew/comp/Navbar';
import Providers from 'app/Providers';
import { LoginProvider } from 'context/LoginContext';
import { UtilityProvider } from 'context/UtilityContext';
import { FleetProvider } from 'context/FleetContext';
import { ModalProvider } from 'context/ModalContext';
// import CookieConsent from 'rolnew/comp/CookieConsent';
import TopWrapper from './TopWrapper';

export default function layout({ children }) {
  return (
    <div className="">
      <Toaster position="bottom-center" reverseOrder={false} />
      {/* <Nav /> */}
      <Navbar />

      {/* <CookieConsent /> */}

      <TopWrapper>
        <Providers>
          <LoginProvider>
            <UtilityProvider>
              <FleetProvider>
                <ModalProvider>
                  <div className="!overflow-x-hidden">{children}</div>
                </ModalProvider>
              </FleetProvider>
            </UtilityProvider>
          </LoginProvider>
        </Providers>
        <div id="mainModalContainer" />
      </TopWrapper>
      <Footer />
    </div>
  );
}
