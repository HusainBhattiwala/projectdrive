import H1 from 'components/typography/H1';
import H2 from 'components/typography/H2';
import P from 'components/typography/P';
import { metadata } from 'components/utils/metadata';
import Link from 'next/link';
import React from 'react';

export function generateMetadata() {
  return metadata({
    title: 'Privacy and Policy - Privacy & Terms | Rol Drive',
    description:
      'RolDrive’s privacy policies page mentions how we utilise your data. We recommend that you read this page before booking our services.',
    keywords: ['privacy and policy', 'Privacy and terms'],
    ogTitle: 'RolDrive Privacy and Policy - Privacy & Terms',
    ogDescription:
      'RolDrive’s privacy policies page that mentions how we utilise your data. We recommend that you read this page before booking our services.',
    twTitle: 'RolDrive Privacy and Policy - Privacy & Terms',
    twDescription:
      'RolDrive’s privacy policies page that mentions how we utilise your data. We recommend that you read this page before booking our services.',
  });
}

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Privacy Policy',
  url: 'https://www.roldrive.com/privacy-policy',
  potentialAction: {
    '@type': 'SearchAction',
    target:
      'https://www.roldrive.com/search?q=privacy-policy{search_term_string}',
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

      <div className="2xl:container mx-auto sm:px-12 px-6 md:pt-14 pb-14 pt-28">
        <H1 className="!text-[#1E1F27] font-semibold">Privacy Policy</H1>

        <H2 className="!text-[#1E1F27] font-semibold pt-4">1. Introduction</H2>
        <P className="!font-medium md:!text-lg !text-sm pb-6 pt-4">
          1·1 We are committed to safeguarding the privacy of our website
          visitors; in this policy, we explain how we will treat your personal
          information.
        </P>
        <P className="!font-medium md:!text-lg !text-sm pb-6">
          1.2 We ask you to consent to our use of cookies in accordance with the
          terms of this policy when you first visit our website. By using our
          website and agreeing to this policy, you consent to our use of cookies
          in accordance with the terms of this policy.
        </P>

        <H2 className="!text-[#1E1F27] font-semibold pt-4">
          2. Collecting Personal
        </H2>

        <P className="!font-medium md:!text-lg !text-sm pt-4">
          2.1· We may collect, store, and use the following kinds of personal
          information:
        </P>
        <P className="!font-medium md:!text-sm !text-xs pb-3 pt-2">
          (a) Information about your computer and your visits to and use of this
          website, including your IP address, geographical location, browser
          type and version, operating system, referral source, length of visit,
          page views, and website navigation paths.
        </P>
        <P className="!font-medium md:!text-sm !text-xs pb-3 pt-2">
          (b) Information that you provide to us when applying for an account
          through our website, including your name, gender, date of birth,
          address details, and any other relevant personal and financial data.
        </P>
        <P className="!font-medium md:!text-sm !text-xs pb-3 pt-2">
          (c) Information that you provide to us when using the services on our
          website, or that is generated in the course of the use of those
          services, including the timing, frequency, and pattern of service use.
        </P>
        <P className="!font-medium md:!text-sm !text-xs pb-3 pt-2">
          (d) Information contained in or relating to any communication that you
          send to us or send through our website, including the communication
          content and metadata associated with the communication.
        </P>
        <P className="!font-medium md:!text-sm !text-xs pb-3 pt-2">
          (e) Any other personal information that you choose to send to us; and
          provide details of other personal information collected.
        </P>

        <P className="!font-medium md:!text-lg !text-sm pb-6">
          2.2 Before you disclose to us the personal information of another
          person, you must obtain that person&#39;s consent to both the
          disclosure and the processing of that personal information in
          accordance with this policy.
        </P>
        <H2 className="!text-[#1E1F27] font-semibold pt-4">
          3. Using Personal Information
        </H2>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          3.1 Personal information submitted to us through our website will be
          used for the purposes specified in this policy.
        </P>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          3.2 We may use your personal information to:
        </P>
        <P className="!font-medium md:!text-sm !text-xs pb-3">
          (a) Administer our website and business.
        </P>
        <P className="!font-medium md:!text-sm !text-xs pb-3 pt-2">
          (b) Enable your use of the services available on our website.
        </P>
        <P className="!font-medium md:!text-sm !text-xs pb-3 pt-2">
          (c) Send you email notifications that you have specifically requested.
        </P>
        <P className="!font-medium md:!text-sm !text-xs pb-3 pt-2">
          (d) Send you communications relating to our business, where you have
          specifically agreed to this, by email or similar technology. You can
          inform us at any time if you no longer require communications.
        </P>
        <P className="!font-medium md:!text-sm !text-xs pb-3 pt-2">
          (e) Provide third parties with statistical information about our
          users, but those third parties will not be able to identify any
          individual user from that information.
        </P>
        <P className="!font-medium md:!text-sm !text-xs pb-3 pt-2">
          (f) Deal with inquiries and complaints made by or about you relating
          to our website.
        </P>
        <P className="!font-medium md:!text-sm !text-xs pb-3 pt-2">
          (g) Keep our website secure and prevent fraud.
        </P>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          3.3 We will not, without your express consent, supply your personal
          information to any third party for the purpose of their or any other
          third party&#39;s direct marketing.
        </P>
        <H2 className="!text-[#1E1F27] font-semibold pt-4">
          4. Disclosing Personal Information
        </H2>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          4.1 We may disclose your personal information to any of our employees,
          officers, insurers, professional advisers, agents, suppliers, or
          subcontractors insofar as reasonably necessary for the purposes set
          out in this policy.
        </P>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          4.2 We may disclose your personal information:
        </P>
        <P className="!font-medium md:!text-sm !text-xs pb-3">
          (a) To the extent that we are required to do so by law.
        </P>
        <P className="!font-medium md:!text-sm !text-xs pb-3">
          (b) In connection with any ongoing or prospective legal proceedings.
        </P>
        <P className="!font-medium md:!text-sm !text-xs pb-3">
          (c) In order to establish, exercise, or defend our legal rights,
          including providing information to others for the purposes of fraud
          prevention.
        </P>
        <P className="!font-medium md:!text-sm !text-xs pb-3">
          (d) To any person whom we reasonably believe may apply to a court or
          other competent authority for disclosure of that personal information
          where, in our reasonable opinion, such court or authority would be
          reasonably likely to order disclosure of that personal information.
        </P>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          4.3 Except as provided in this policy, we will not provide your
          personal information to third parties.
        </P>
        <H2 className="!text-[#1E1F27] font-semibold pt-4">
          5. Retaining Personal Information
        </H2>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          5.1 This Section 5 sets out our data retention policies and
          procedures, designed to help ensure that we comply with our legal
          obligations in relation to the retention and deletion of personal
          information.
        </P>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          5.2 Personal information that we process for any purpose or purposes
          in connection with our business operations and service delivery shall
          not be kept for longer than is necessary for that purpose or those
          purposes.
        </P>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          5.3 Notwithstanding the other provisions of this Section 5, we will
          retain documents (including electronic documents) containing personal
          data:
        </P>
        <P className="!font-medium md:!text-sm !text-xs pb-3">
          (a) To the extent that we are required to do so by law.
        </P>
        <P className="!font-medium md:!text-sm !text-xs pb-3">
          (b) If we believe that the documents may be relevant to any ongoing or
          prospective legal proceedings.
        </P>
        <P className="!font-medium md:!text-sm !text-xs pb-3">
          (c) In order to establish, exercise, or defend our legal rights
          (including providing information to others for the purposes of fraud
          prevention and reducing credit risk).
        </P>
        <H2 className="!text-[#1E1F27] font-semibold pt-4">
          6. Security of Personal Information
        </H2>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          6.1 We will take reasonable technical and organizational precautions
          to prevent the loss, misuse, or alteration of your personal
          information.
        </P>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          6.2 We will store all the personal information you provide on our
          secure, password- and firewall-protected servers.
        </P>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          6.3 All electronic financial transactions entered into through our
          website will be protected by encryption technology.
        </P>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          6.3 All electronic financial transactions entered into through our
          website will be protected by encryption technology.
        </P>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          6.4 You acknowledge that the transmission of information over the
          internet is inherently insecure, and we cannot guarantee the security
          of data sent over the internet.
        </P>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          6.5 You are responsible for keeping the password you use for accessing
          our corporate or private account confidential; we will not ask you for
          your password except when you log in to our website.
        </P>
        <H2 className="!text-[#1E1F27] font-semibold pt-4">7. Amendments</H2>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          7.1 We may update this policy from time to time by publishing a new
          version on our website.
        </P>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          7.2 You should check this page occasionally to ensure you are happy
          with any changes to this policy.
        </P>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          7.3 We may notify you of changes to this policy by email.
        </P>
        <H2 className="!text-[#1E1F27] font-semibold pt-4">8. Your Rights</H2>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          8.1 You may instruct us to provide you with any personal information
          we hold about you; provision of such information will be subject to:
        </P>
        <P className="!font-medium md:!text-sm !text-xs pb-3">
          (a) The supply of appropriate evidence of your identity. For this
          purpose, we will usually accept a photocopy of your passport certified
          by a solicitor or bank plus an original copy of a utility bill showing
          your current address.
        </P>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          8.2 We may withhold personal information that you request to the
          extent permitted by law.
        </P>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          8.3 You may instruct us at any time not to process your personal
          information for marketing purposes.
        </P>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          8.4 In practice, you will usually either expressly agree in advance to
          our use of your personal information for marketing purposes, or we
          will provide you with an opportunity to opt out of the use of your
          personal information for marketing purposes.
        </P>
        <H2 className="!text-[#1E1F27] font-semibold pt-4">
          9. Third-Party Websites
        </H2>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          9.1 Our website includes hyperlinks to, and details of, third-party
          websites.
        </P>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          9.2 We have no control over, and are not responsible for, the privacy
          policies and practices of third parties.
        </P>
        <H2 className="!text-[#1E1F27] font-semibold pt-4">
          10. Updating Information
        </H2>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          10.1 Please let us know if the personal information that we hold about
          you needs to be corrected or updated.
        </P>
        <H2 className="!text-[#1E1F27] font-semibold pt-4">
          11. Data Protection Registration Number
        </H2>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          11.1 We are registered as a data controller with the UK Information
          Commissioner&#39;s Office under registration number C1415369.
        </P>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          11.2 This website is owned and operated by RolDrive Ltd.
        </P>
        <P className="!font-medium md:!text-lg !text-sm pb-2 pt-4">
          11.3 RolDrive Ltd is a company registered in the UK (number 13950372).
          Our head office is located at 134 Buckingham Palace Road, London,
          England, SW1W 9SA. If you have any other questions about this policy,
          you can write to us at our head office or email
          {' '}
          <Link
            className="text-primary underline"
            target="_blank"
            href="mailto:info@roldrive.com"
          >
            info@roldrive.com
          </Link>
        </P>
      </div>
    </>
  );
}

export default page;
