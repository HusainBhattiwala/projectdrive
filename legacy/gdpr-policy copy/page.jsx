/* eslint-disable max-len */
import React from 'react';
import H2 from 'components/typography/H2';
import P from 'components/typography/P';
import { BackgroundImage } from 'components/ui/BackgroundImage';
import H3 from 'components/typography/H3';

export default function Home() {
  return (
    <main>
      <div className="md:pt-[115px] md:pb-24 xl:px-14 lg:px-10 px-4 pt-10 pb-8 bg-center w-full h-auto relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <BackgroundImage
            src="/images/others/citydrive.png"
            alt="booking_bg"
            className="w-full h-auto object-cover brightness-[0.7]"
          />
          <H2 className="mx-auto p-6 text-center text-3xl text-black font-bold">GDPR Policy</H2>
        </div>
      </div>

      <section>
        <div className="container mx-auto p-6">
          <div className="text-center text-black my-4">
            <H2 className="text-3xl font-semibold mb-3">RolDrive - GDPR compliant Data Protection Policy</H2>
            <P>Updated March 16, 2023</P>
          </div>
          <div className="my-4">
            <H3 className="text-black">Purpose and Background</H3>
            <P>RolDrive, holds information about drivers, customers and other people involved with our business activities. RolDrive has a responsibility to look after this information properly, and to ensure we comply with the EU General Data Protection Regulation (GDPR) which comes into force in the UK from 25th March 2018. It is expected that the GDPR will continue to form the basis of UK Data Protection Legislation, even once the UK has left the EU, so it is therefore fully taken into account in this policy.</P>
            <P>Data protection good practice is not just a matter of legal compliance and ticking boxes. Data protection is about taking care of our drivers and clients and ensuring that we are respecting their privacy. Poor practice or a serious breach could not only harm individuals but would also have a serious effect on the reputation of RolDrive Ltd and we value our good name.</P>
          </div>
          <div className="my-4">
            <H3 className="text-black">Scope</H3>
            <P>This policy applies to information relating to individuals (drivers & customers/clients) which is held by RolDrive Ltd.</P>
          </div>
          <div className="my-4">
            <H3 className="text-black">Our legal basis for using people’s data </H3>
            <P>Everything we do with records about individuals – obtaining the information, storing it, using it, sharing it, even deleting it – will have an acceptable legal basis. There are six of these:</P>
            <ul>
              <li>Consent from the individual (or someone authorised to consent on their behalf).</li>
              <li>Where it is necessary in connection with a contract between RolDrive and an individual.</li>
              <li>Where it is necessary because of legal obligation – if the law says we must.</li>
              <li>Where it is necessary in an emergency, to protect an individual’s ‘vital interests’.</li>
              <li>Where it involves the exercise of a public function – i.e most activities of most government, local government and other public bodies.</li>
              <li>Where it is necessary in our legitimate interests, as long as these are not outweighed by the interests of the individual.</li>
            </ul>
            <P>Where we are basing our processing on consent we will be able to ‘demonstrate’ that we hold consent. This means having a record of who gave consent, when they gave it, how they gave it (e.g. on the website, on a form, verbally) and what they actually consented to.</P>
            <P>In the case of legitimate interests, we will do a balancing test, and to be confident that our legitimate interests in using the data in a particular way – for example in providing our services – are not over-ridden by the interests of the individual.</P>
          </div>
        </div>
      </section>

    </main>
  );
}
