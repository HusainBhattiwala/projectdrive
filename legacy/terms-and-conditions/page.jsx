import H1 from 'components/typography/H1';
import H4 from 'components/typography/H4';
import { metadata } from 'components/utils/metadata';
import React from 'react';

export function generateMetadata() {
  return metadata({
    title: 'Terms and Conditions | Terms & Service | RolDrive',
    description:
      'RolDrive’s terms and conditions page for the ground transportation services that we provide. It is recommended that you read this page before booking our services.',
    keywords: ['terms and conditions'],
    ogTitle: 'Driving with Confidence: Terms & Service at RolDrive',
    ogDescription:
      'Explore with assurance through "Driving with Confidence: Terms & Service at RolDrive," ensuring transparency and reliability on your journey.',
    twTitle: 'Driving with Confidence: Terms & Service at RolDrive',
    twDescription:
      'Explore with assurance through "Driving with Confidence: Terms & Service at RolDrive," ensuring transparency and reliability on your journey.',
  });
}

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Terms and Conditions',
  url: 'https://www.roldrive.com/terms-and-conditions',
  potentialAction: {
    '@type': 'SearchAction',
    target:
      'https://www.roldrive.com/search?q=terms-and-conditions{search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="2xl:container mx-auto sm:px-12 px-6 md:pt-14 pb-14 pt-28 text-center">
        <H1 className="!text-[#1E1F27] font-semibold sp">
          Terms and Conditions
        </H1>
        <H4 className="!text-[#1E1F27] font-semibold py-12 !text-xl">
          Cooming soon
        </H4>
      </div>
    </>
  );
}

export default page;
