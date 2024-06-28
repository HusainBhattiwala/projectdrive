'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import TopPicks from 'rolnew/comp/TopPicks';
import Banner from 'rolnew/section/cities/Banner';
import TrustedPartners from 'rolnew/comp/TrustedPartners';
import OurFeet from 'rolnew/section/home/OurFeet';
import Locations from 'rolnew/comp/Locations';
import Contact from 'rolnew/comp/Contact';
import Destinations from 'rolnew/section/home/Destinations';
import DownloadOurApp from 'rolnew/section/home/DownloadOurApp';
import CategoriesComponent from 'components/AllCategories';
import FAQ from 'rolnew/comp/FAQ';
import Landmark from 'rolnew/section/cities/LandMark';
import ChauffeurServiceDescription from 'rolnew/comp/ChauffeurServiceDescription';

import { cityData } from './cityData';

const cities = ['london', 'dubai', 'newyork', 'paris', 'tokyo'];

function CityPage() {
  const [pageData, setPageData] = useState({});
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    const urls = pathName.split('/');
    const url = urls[urls.length - 1];
    if (!cities.includes(url)) {
      router.push('/404');
    } else {
      console.log(cityData[url]);
      setPageData(cityData[url]);
    }
  }, [pathName, router]);
  return (
    <>
      <Banner pageData={pageData} />
      <div className='bg-[#11202D] py-12'>
        <TrustedPartners img={pageData?.trustedPartnersData?.img} trustedPartnersData={pageData?.trustedPartnersData?.data} showTitle={false} />
      </div>
      <OurFeet showBooking />
      <Landmark pageData={pageData} />
      <TopPicks />
      <Locations showPadding />
      <Contact />
      <Destinations />
      <DownloadOurApp />
      <CategoriesComponent />
      <FAQ />
      <ChauffeurServiceDescription
        ChauffeurServiceDescription={pageData.ChauffeurServiceDescription}
      />
    </>
  );
}

export default CityPage;
