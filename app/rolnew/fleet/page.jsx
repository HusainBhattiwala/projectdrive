import TrustedPartners from "rolnew/comp/TrustedPartners";
import DownloadOurApp from "rolnew/section/home/DownloadOurApp";
import OurPresence from "rolnew/section/home/OurPresence";
import Locations from "rolnew/comp/Locations";
import Contact from "rolnew/comp/Contact";
import FAQ from "rolnew/comp/FAQ";
import CarClass from "rolnew/comp/CarClass";
import FleetBanner from "rolnew/comp/FleetBanner";

export default function page() {
  const bannerData = {
    mainTitle: "Our Luxurious Fleet",
  };

  return (
    <>
      {/* <BannerTitle mainTitle="Premium Chauffeur Service" description="Your exclusive and dependable chauffeur service indulgence." /> */}
      <FleetBanner {...bannerData} />
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
