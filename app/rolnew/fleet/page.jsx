import ServicesBanner from "rolnew/comp/ServicesBanner";
import TopPicks from "rolnew/comp/TopPicks";
import TrustedPartners from "rolnew/comp/TrustedPartners";
import DownloadOurApp from "rolnew/section/home/DownloadOurApp";
import OurPresence from "rolnew/section/home/OurPresence";
import Services from "rolnew/comp/Services";
import Locations from "rolnew/comp/Locations";
import Contact from "rolnew/comp/Contact";
import FAQ from "rolnew/comp/FAQ";
import MegaContent from "rolnew/comp/MegaContent";
import CarClass from "rolnew/comp/CarClass";

export default function page() {
  const bannerData = {
    mainTitle: "Our Luxurious Fleet",
  };

  return (
    <>
      {/* <BannerTitle mainTitle="Premium Chauffeur Service" description="Your exclusive and dependable chauffeur service indulgence." /> */}
      <ServicesBanner {...bannerData} />
      <CarClass />
      <TrustedPartners />
      <OurPresence />
      <Locations />
      <FAQ />
      <Contact />
      <DownloadOurApp />
    </>
  );
}
