'use client';

import BannerLight from 'rolnew/section/cities/BannerLight';
import BookModal from 'rolnew/comp/BookModal';
import Locations from 'rolnew/comp/Locations';
import GetInTouch from 'rolnew/comp/GetInTouch';
import metadataConfig from 'rolnew/meta/metadataConfig';
import MetaTags from 'rolnew/meta/MetaTags';

const metadata = metadataConfig.contactUs;

export default function Page() {
  const pageData = {
    banner: {
      title: 'Contact Us',
      subTitle: 'Arrive in style, stress free and rejuvenated',
      bannerImage: '/rolnew/global/contact-us.jpg',
      isCentered: true,
    },
  };

  return (
    <>
      <MetaTags metadata={metadata} />
      <BannerLight pageData={pageData} />
      <GetInTouch />
      <Locations />
      <BookModal />
    </>
  );
}
