/* eslint-disable max-len */
import Image from 'next/image';
import Link from 'next/link';
import H1 from 'components/typography/H1';
import H2 from 'components/typography/H2';
import P from 'components/typography/P';

export default function AboutUs() {
  return (
    <section>
      <div className="2xl:container px-4 md:px-6 lg:px-[60px] mx-auto mt-[2.5rem] mb-[8.5rem]">
        <H1 className="text-[#000] uppercase font-[700] lg:!text-[30px] md:!text-3xl sm:!text-2xl !text-xl mb-8">
          About RolDrive
        </H1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-[66px] gap-4 mb-16">
          <div className="bg-gray-200  w-full h-full">
            <Image
              alt="luxury-chauffeur-service-that-creates-benchmarks"
              src="/images/others/luxury-chauffeur-service-that-creates-benchmarks.jpg"
              fill
              className="object-cover h-full w-full bg-center !relative grayscale hover:grayscale-0"
            />
          </div>
          <article className="font-robo">
            <H1 className="!text-base font-bold text-black capitalize">Hiring a professional chauffeur service for your premium clientele</H1>
            <P className="!text-base text-[#3E3E3E] my-2 text-justify">
              RolDrive is a distinguished professional chauffeur services company, dedicated to transforming the way individuals travel, with its roots in London, UK. Established to cater to corporate and celebrity clientele, we offer seamless transportation to their desired destinations across the globe, ensuring absolute comfort, sophistication, and convenience.
            </P>
            <P className="!text-base text-[#3E3E3E] my-5 text-justify">
              Renowned for our unwavering commitment to customer satisfaction, we guarantee our clients arrive at their destinations revitalized and stress-free. RolDrive utilizes the most luxurious and technologically advanced vehicles, allowing clients to effortlessly manage their ground transportation bookings and navigate unfamiliar cities with confidence.
            </P>
            <P className="!text-base text-[#3E3E3E] my-2 text-justify">
              Aspiring to be our clients&#39; premier ground transfer provider, RolDrive extends its exceptional chauffeur service to most major cities worldwide.
              Choose RolDrive’s professional chauffeur driven services today and experience the difference!
              <br />
              RolDrive – Your trusted travel partner.
            </P>
          </article>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-[66px] gap-4">
          <article className=" font-robo order-2 md:order-1">
            <H2 className="!text-base font-bold text-black capitalize">Luxury Chauffeur Service that creates benchmarks become the perfect choice</H2>
            <P className="!text-base text-[#3E3E3E] my-2 text-justify">
              Experience the distinction that RolDrive offers with our
              {' '}
              <Link href="https://www.roldrive.com/chauffeur-service-in-london" className="text-primary hover:text-black">chauffeur service in London</Link>
              {' '}
              , whether you opt for a chauffeur driven car as an
              {' '}
              <Link href="https://www.roldrive.com/hourly-chauffeur-service" className="text-primary hover:text-black">hourly chauffeur service</Link>
              {' '}
              or a direct transfer. Our luxury chauffeur service provides premium transportation solutions for corporate clients and celebrities seeking unparalleled comfort and convenience. We feature a professionally trained
              {' '}
              <Link href="https://www.roldrive.com/full-day-chauffeur-hire" className="text-primary hover:text-black">full day chauffeur hire </Link>
              {' '}
              in London who are adept at navigating luxury vehicles, including limousines or high-end 4x4s, ensuring clients arrive at their destinations in style and absolute comfort.
            </P>
            <P className="!text-base text-[#3E3E3E] my-5 text-justify">
              Our impeccably maintained vehicles are suitable for any service you may require such as an
              {' '}
              <Link href="https://www.roldrive.com/event-chauffeur-service-in-london" className="text-primary hover:text-black">event chauffeur service in London</Link>
              {' '}
              , making them the perfect choice for corporate clients or celebrities in need of transportation for a day&#39;s outing or business engagements. Consider our chauffeurs as your personal drivers for the day, ready to escort you through the city as you explore its hidden gems!
            </P>
            <P className="!text-base text-[#3E3E3E] my-2 text-justify">
              Read our blog section for the latest
              {' '}
              <Link href="https://blog.roldrive.com/" className="text-primary hover:text-black">news about chauffeur services</Link>
              {' '}
              and insight into our exceptional standards of service!

            </P>
          </article>
          <div className="bg-gray-200  w-full h-full order-1 md:order-2">
            <Image
              alt="luxury-chauffeur-service-that-creates-benchmarks"
              src="/images/others/hiring-a-professional-chauffeur-service.jpg"
              fill
              className="object-cover h-full w-full grayscale bg-center !relative hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
