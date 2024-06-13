"use client";

import Hero from "rolnew/comp/Hero";
import ServiceComp from "rolnew/comp/ServiceComp";
import BusinessForm from "rolnew/section/business/BusinessForm";
import Contact from "rolnew/comp/Contact";
import FAQ from "rolnew/comp/FAQ";
import OurFeet from "rolnew/section/home/OurFeet";

function FullPage() {
  return (
    <>
      <Hero
        title='Tailored Business Transport Assistance'
        description="Experience the epitome of luxury travel with RolDrive's personal chauffeur services. From business trips to leisurely excursions, we are dedicated to providing you with unparalleled comfort, convenience, and sophistication."
        formContent={<BusinessForm />}
        mainBgUrl='/rolnew/services/business-solution-banner.svg'
        titleWidth='max-w-[533px]'
      />
      <ServiceComp />
      <OurFeet />
      <FAQ />
      <Contact />
    </>
  );
}

export default FullPage;
