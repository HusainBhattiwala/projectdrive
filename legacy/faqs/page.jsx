import FaqsFullPage from 'components/FaqsFullPage';
import H2 from 'components/typography/H2';
import P from 'components/typography/P';
import { BackgroundImage } from 'components/ui/BackgroundImage';
import { metadata } from 'components/utils/metadata';

export function generateMetadata() {
  return metadata({
    title: 'Read FAQ about How to Book a Chauffeur Service | Rol Drive',
    description:
      'Get answers to all your questions on how to book a chauffeur service with Rol Drive. Explore our FAQ for a seamless and informed booking experience.',
    keywords: ['frequently asked questions (FAQ)'],
    ogTitle: "Rol Drive's FAQ on Booking Chauffeur Services",
    ogDescription:
      'Find answers to your questions on booking chauffeur services with Rol Drive in our informative FAQ section. Your journey starts with knowledge.',
    twTitle: "Rol Drive's FAQ on Booking Chauffeur Services",
    twDescription:
      'Find answers to your questions on booking chauffeur services with Rol Drive in our informative FAQ section. Your journey starts with knowledge.',
  });
}

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Faqs',
  url: 'https://www.roldrive.com/faqs',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.roldrive.com/search?q=faqs{search_term_string}',
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

      <div className="md:pt-[115px] md:pb-24 xl:px-14 lg:px-10 px-4 pt-10 pb-8 bg-center w-full h-96 relative -mt-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <BackgroundImage
            src="/images/banner/faqs-banner.png"
            alt="booking_bg"
            className="w-full h-auto object-cover brightness-[0.5]"
          />
        </div>
        <div className="container mx-auto">
          <div className="absolute bottom-6">
            <H2 className="text-white font-bold !text-3xl">FAQs</H2>
            <P className="text-white lg:!text-base">
              Find your Frequently Asked Questions & Answers Here!
            </P>
          </div>
        </div>
      </div>
      <FaqsFullPage />
    </>
  );
}

export default page;
