// eslint-disable-next-line import/no-extraneous-dependencies
import { Toaster } from "react-hot-toast";
import Footer from "rolnew/comp/Footer";
import "./global.css";
import Navbar from "rolnew/comp/Navbar";
import Providers from "app/Providers";
import { LoginProvider } from "context/LoginContext";
import { UtilityProvider } from "context/UtilityContext";
import { FleetProvider } from "context/FleetContext";
import TopWrapper from "./TopWrapper";

export default function layout({ children }) {
  return (
    <div className='font-robo'>
      <Toaster position='bottom-center' reverseOrder={false} />
      {/* <Nav /> */}
      <Navbar />

      <TopWrapper>
        <Providers>
          <LoginProvider>
            <UtilityProvider>
              <FleetProvider>
                <div className='!overflow-x-hidden'>{children}</div>
              </FleetProvider>
            </UtilityProvider>
          </LoginProvider>
        </Providers>
        <div id='mainModalContainer' />
      </TopWrapper>
      <Footer />
    </div>
  );
}
