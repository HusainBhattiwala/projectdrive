'use client';

import React from 'react';
import TermsAndConditions from 'rolnew/comp/TermsAndConditions';
import metadataConfig from 'rolnew/meta/metadataConfig';
import MetaTags from 'rolnew/meta/MetaTags';

const metadata = metadataConfig.termsAndConditions;

export default function Page() {
  return (
    <>
      <MetaTags metadata={metadata} />
      <TermsAndConditions />
    </>
  );
}
