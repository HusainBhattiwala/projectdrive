import BookingFlow from "rolnew/section/home/BookingFlow";
import ClientTestimonial from "rolnew/section/home/ClientTestimonial";
import Contact from "rolnew/comp/Contact";
import Counts from "rolnew/section/home/Counts";
import Destinations from "rolnew/section/home/Destinations";
import DownloadOurApp from "rolnew/section/home/DownloadOurApp";
import FAQ from "rolnew/comp/FAQ";
import Locations from "rolnew/section/home/Locations";
import OurFeet from "rolnew/section/home/OurFeet";
import OurPresence from "rolnew/section/home/OurPresence";
import Services from "rolnew/section/home/Services";
import TrustedPartner from "rolnew/section/home/TrustedPartner";
import BookingBanner from "./BookingBanner";

export const metadata = {
  title: "Roldrive",
  description: "Welcome to roldrive :)",
};

export default function page() {
  return (
    <>
      <BookingBanner />
      <DownloadOurApp />
      <Counts />
      <BookingFlow />
      <Services />
      <OurPresence />
      <Locations />
      <OurFeet />
      <TrustedPartner />
      <ClientTestimonial />
      <Destinations />
      <FAQ />
      <Contact />
    </>
  );
}
