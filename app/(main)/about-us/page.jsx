'use client';

import Contact from 'rolnew/comp/Contact';
import BannerLight from 'rolnew/section/cities/BannerLight';
import BookModal from 'rolnew/comp/BookModal';
import AboutUsContent from 'rolnew/comp/AboutUsContent';
import metadataConfig from 'rolnew/meta/metadataConfig';
import MetaTags from 'rolnew/meta/MetaTags';

const metadata = metadataConfig.aboutUs;

export default function Page() {
  const pageData = {
    banner: {
      title: 'About Us',
      subTitle: 'Arrive in style, stress free and rejuvenated',
      bannerImage: '/rolnew/global/about-us.jpg',
      isCentered: true,
    },
  };

  return (
    <>
      <MetaTags metadata={metadata} />
      <BannerLight pageData={pageData} />
      <AboutUsContent />
      <Contact />
      <BookModal />
    </>
  );
}
