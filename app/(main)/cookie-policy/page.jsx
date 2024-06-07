import H1 from 'components/typography/H1';
import H2 from 'components/typography/H2';
import P from 'components/typography/P';
import { metadata } from 'components/utils/metadata';
import Link from 'next/link';
import React from 'react';

export function generateMetadata() {
  return metadata({
    title: 'Cookie Policy | Roldrive',
  });
}

function page() {
  return (
    <div className="2xl:container mx-auto sm:px-12 px-6 md:pt-14 pb-14 pt-28">
      <H1 className="!text-[#1E1F27] font-semibold sp">Cookie Policy</H1>
      <H2 className="!text-[#1E1F27] font-semibold pt-4">1. About Cookies</H2>
      <P className="!font-medium md:!text-lg !text-sm pb-6 pt-4">
        1·1 A cookie is a file containing an identifier—a string of
        letters and numbers—that is sent by a web server to a web browser and is stored
        by the browser. The identifier is then sent back to the server each time the
        browser requests a page from the server.
      </P>
      <P className="!font-medium md:!text-lg !text-sm pb-6">
        1.2 Cookies may be either &quot;persistent&quot; cookies or
        &quot;session&quot; cookies: a persistent cookie will be stored by a web
        browser and will remain valid until its set expiry date, unless deleted by the
        user before the expiry date; a session cookie, on the other hand, will expire
        at the end of the user session, when the web browser is closed.
      </P>

      <P className="!font-medium md:!text-lg !text-sm pb-6">
        1.3 Cookies do not typically contain any information that
        personally identifies a user, but personal information that we store about you
        may be linked to the information stored in and obtained from cookies.
      </P>

      <P className="!font-medium md:!text-lg !text-sm pb-6">
        1.4 Cookies can be used by web servers to identify and track
        users as they navigate different pages on a website and identify users
        returning to a website.
      </P>

      <H2 className="!text-[#1E1F27] font-semibold pt-4">2. Our Cookies</H2>
      <P className="!font-medium md:!text-lg !text-sm pb-6 pt-4">
        2·1 We use both session and persistent cookies on our website.
      </P>
      <P className="!font-medium md:!text-lg !text-sm">
        2·1 The names of the cookies that we use on our website, and
        the purposes for which they are used, are set out below:
      </P>
      <P className="!font-medium md:!text-sm !text-xs pb-3 pt-2">
        (a) We use cookies on our website to recognize a computer when a
        user visits the website, track users as they navigate the website, improve the
        website&#39;s usability, analyze the use of the website, administer the website,
        prevent fraud, and improve the security of the website, personalize the website
        for each user.
      </P>
      <H2 className="!text-[#1E1F27] font-semibold pt-4">3. Analytics Cookies</H2>
      <P className="!font-medium md:!text-lg !text-sm pb-6 pt-4">
        3·1 We use Google Analytics Universal to analyze the use of our
        website.
      </P>
      <P className="!font-medium md:!text-lg !text-sm pb-6 pt-4">
        3·2 Our analytics service provider generates statistical and
        other information about website use by means of cookies.
        Our analytics service provider&#39;s privacy policy is
        available at:
        {' '}
        <Link className="text-primary underline" target="_blank" href="/privacy-policy">Privacy Policy</Link>
      </P>
      <P className="!font-medium md:!text-lg !text-sm pb-6 pt-4">
        3·3 We partner with Microsoft Clarity and Microsoft Advertising to capture how you use and interact with our website through behavioral metrics, heatmaps, and session replay to improve and market our products/services. Website usage data is captured using first and third-party cookies and other tracking technologies to determine the popularity of products/services and online activity. Additionally, we use this information for site optimization, fraud/security purposes, and advertising. For more information about how Microsoft collects and uses your data, visit the
        {' '}
        <Link className="text-primary underline" target="_blank" href="https://learn.microsoft.com/en-us/clarity/setup-and-installation/privacy-disclosure">Microsoft Privacy Statement.</Link>
      </P>
      <H2 className="!text-[#1E1F27] font-semibold pt-4">4. Blocking Cookies</H2>
      <P className="!font-medium md:!text-lg !text-sm pt-4">
        4.1 Most browsers allow you to refuse to accept cookies; for
        example:
      </P>
      <P className="!font-medium md:!text-sm !text-xs pb-3 pt-2">
        (a) In Internet Explorer, you can block cookies using the cookie
        handling override settings available by clicking &quot;Tools,&quot;
        &quot;Internet Options,&quot; &quot;Privacy,&quot; and then
        &quot;Advanced.&quot;
      </P>
      <P className="!font-medium md:!text-sm !text-xs pb-3 pt-2">
        (b) In Firefox, you can block all cookies by clicking
        &quot;Tools,&quot; &quot;Options,&quot; &quot;Privacy,&quot; selecting
        &quot;Use custom settings for history&quot; from the drop-down menu, and
        unticking &quot;Accept cookies from sites.&quot;
      </P>
      <P className="!font-medium md:!text-sm !text-xs pb-3 pt-2">
        (b) In Firefox, you can block all cookies by clicking
        &quot;Tools,&quot; &quot;Options,&quot; &quot;Privacy,&quot; selecting
        &quot;Use custom settings for history&quot; from the drop-down menu, and
        unticking &quot;Accept cookies from sites.&quot;
      </P>
      <P className="!font-medium md:!text-sm !text-xs pb-3 pt-2">
        (c) In Chrome, you can block all cookies by accessing the
        &quot;Customize and control&quot; menu, clicking &quot;Settings,&quot;
        &quot;Show advanced settings,&quot; and &quot;Content settings,&quot; and then
        selecting &quot;Block sites from setting any data&quot; under the
        &quot;Cookies&quot; heading.
      </P>
      <P className="!font-medium md:!text-lg !text-sm pt-4">
        4.2 Blocking all cookies will have a negative impact upon the
        usability of many websites.
      </P>
      <P className="!font-medium md:!text-lg !text-sm pt-4">
        4.3 If you block cookies, you will not be able to use all the
        features on our website.
      </P>
      <H2 className="!text-[#1E1F27] font-semibold pt-4">5. Deleting Cookies</H2>
      <P className="!font-medium md:!text-lg !text-sm pt-4">
        5.1 You can delete cookies already stored on your computer; for
        example:
      </P>
      <P className="!font-medium md:!text-sm !text-xs pb-3 pt-2">
        (a) In Internet Explorer, you must manually delete cookie files.
        You can find instructions for doing so at
        {' '}
        <Link className="text-primary underline" target="_blank" href="http://windows.microsoft.com/en-gb/internet-explorer/delete-manage-cookies#ie=ie-11">http://windows.microsoft.com/en-gb/internet-explorer/delete-manage-cookies#ie=ie-11</Link>
      </P>
      <P className="!font-medium md:!text-sm !text-xs pb-3 pt-2">
        (b) In Firefox, you can delete cookies by clicking
        &quot;Tools,&quot; &quot;Options,&quot; and &quot;Privacy,&quot; then selecting
        &quot;Use custom settings for history&quot; from the drop-down menu, clicking
        &quot;Show Cookies,&quot; and then clicking &quot;Remove All Cookies.&quot;
      </P>
      <P className="!font-medium md:!text-sm !text-xs pb-3 pt-2">
        (c) In Chrome, you can delete all cookies by accessing the
        &quot;Customize and control&quot; menu, and clicking &quot;Settings,&quot;
        &quot;Show advanced settings,&quot; and &quot;Clear browsing data,&quot; and
        then selecting &quot;Cookies and other site and plug-in data&quot; before
        clicking &quot;Clear browsing data.&quot;
      </P>
      <P className="!font-medium md:!text-lg !text-sm pt-4">
        5.2 Deleting cookies will have a negative impact on the
        usability of many websites.
      </P>
      <H2 className="!text-[#1E1F27] font-semibold pt-4">6. Cookie Preferences</H2>
      <P className="!font-medium md:!text-lg !text-sm pt-4">
        6.1 You can manage your preferences relating to the use of
        cookies on our website through this page.
      </P>
    </div>
  );
}

export default page;
