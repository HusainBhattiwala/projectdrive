import H1 from 'components/typography/H1';
import H4 from 'components/typography/H4';
import { metadata } from 'components/utils/metadata';
import React from 'react';

export function generateMetadata() {
  return metadata({
    title: 'Become a Supplier | Global Chauffeur Partner | Rol Drive',
    description:
      'Want to partner with RolDrive as a vehicle supplier? Feel free to contact us and learn more about our partnership program.',
    keywords: ['global chauffeur partner'],
    ogTitle: 'RolDrive | Become a Supplier - Global Chauffeur Partner',
    ogDescription:
      'Want to partner with RolDrive as a ground transport supplier? Feel free to contact us and learn more about our partnership program.',
    twTitle: 'RolDrive | Become a Supplier - Global Chauffeur Partner',
    twDescription:
      'Want to partner with RolDrive as a ground transport supplier? Feel free to contact us and learn more about our partnership program.',
  });
}

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Become a Supplier',
  url: 'https://www.roldrive.com/become-a-supplier',
  potentialAction: {
    '@type': 'SearchAction',
    target:
      'https://www.roldrive.com/search?q=become-a-supplier{search_term_string}',
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
        <H1 className="!text-[#1E1F27] font-semibold sp">Become a Supplier</H1>
        <H4 className="!text-[#1E1F27] font-semibold py-12 !text-xl">
          Cooming soon
        </H4>
      </div>
    </>
  );
}

export default page;
