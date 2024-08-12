'use client';

import React from 'react';
import PrivacyPolicy from 'rolnew/comp/PrivacyPolicy';
import metadataConfig from 'rolnew/meta/metadataConfig';
import MetaTags from 'rolnew/meta/MetaTags';

const metadata = metadataConfig.privacyPolicy;

export default function page() {
  return (
    <>
      <MetaTags metadata={metadata} />
      <PrivacyPolicy />
    </>
  );
}
