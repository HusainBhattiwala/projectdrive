import React from 'react';
import H1 from 'components/typography/H1';
import H4 from 'components/typography/H4';
import { metadata } from 'components/utils/metadata';

export function generateMetadata() {
  return metadata({
    title: 'General Data Protection Regulation (GDPR) and Policy | Rol Drive',
    description:
      'RolDrive’s GDPR policies page mentions how we utilise your data. We recommend that you read this page before booking our services.',
    keywords: ['GDPR policy', 'GDPR'],
    ogTitle: 'Rol Drive General Data Protection Regulation (GDPR) and Policy',
    ogDescription:
      'RolDrive’s GDPR policies page that mentions how we utilise your data. We recommend that you read this page before booking our services.',
    twTitle: 'Rol Drive General Data Protection Regulation (GDPR) and Policy',
    twDescription:
      'RolDrive’s GDPR policies page that mentions how we utilise your data. We recommend that you read this page before booking our services.',
  });
}

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'GDPR Policy',
  url: 'https://www.roldrive.com/gdpr-policy',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.roldrive.com/search?q=gdpr-policy{search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="2xl:container mx-auto sm:px-12 px-6 md:pt-14 pb-14 pt-28 text-center">
        <H1 className="!text-[#1E1F27] font-semibold">GDPR Policy</H1>
        <H4 className="!text-[#1E1F27] font-semibold py-12 !text-xl">
          Cooming soon
        </H4>
      </div>
    </>
  );
}
