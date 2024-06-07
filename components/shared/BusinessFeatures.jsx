import P from 'components/typography/P';
import H2 from '../typography/H2';

export default function BusinessFeatures() {
  return (
    <section>
      <div className="container mx-auto md:pb-8 md:pt-2 px-4 lg:px-8 xl:px-10 2xl:px-12">
        <div className="flex flex-col justify-center items-center my-8">
          <P className="text-neutral-500 text-base font-normal">Why choose us</P>
          <H2 className="text-neutral-900 text-3xl font-semibold my-2">What makes us better than others</H2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center text-sm my-5">
          <div className="sm:col-span-2 lg:col-span-1 p-3 align-between my-3">
            <img className="mx-auto w-24 h-24" src="/images/icons/cost-effectiveness.svg" alt="" />
            <div>
              <H2 className="text-neutral-900 text-lg font-medium my-5">Cost effectiveness</H2>
              <P className="px-24">
                Competitive prices tailored for unparalleled luxury and personalized chauffeur
                experiences
              </P>
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-1 p-3 align-between my-3">
            <img className="mx-auto w-24 h-24 " src="/images/icons/safety.svg" alt="" />
            <div>
              <H2 className="text-neutral-900 text-lg font-medium my-5">Safety</H2>
              <P className="px-24">Meticulous protocols, trained chauffeurs, and secure, luxury transportation.</P>
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-1 p-3 align-between my-3">
            <img className="mx-auto w-24 h-24" src="/images/icons/privacy.svg" alt="" />
            <div>
              <H2 className="text-neutral-900 text-lg font-medium my-5">Privacy</H2>
              <P className="px-24">Ensuring your privacy, we prioritize discretion throughout your chauffeured experience.</P>
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-1 p-3 align-between my-3">
            <img className="mx-auto w-24 h-24" src="/images/icons/seamless-booking.svg" alt="" />
            <div>
              <H2 className="text-neutral-900 text-lg font-medium my-5">Seamless booking</H2>
              <P className="px-24">
                Easy booking process with immediate account confirmation.
              </P>
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-1 p-3 align-between my-3">
            <img className="mx-auto w-24 h-24 " src="/images/icons/quick-support.svg" alt="" />
            <div>
              <H2 className="text-neutral-900 text-lg font-medium my-5">Quick Support</H2>
              <P className="px-24">Need help? Our support team is available 24/7 to cater to any queries you may have and to guide you if needed.</P>
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-1 p-3 align-between my-3">
            <img className="mx-auto w-24 h-24" src="/images/icons/electric-vehicle.svg" alt="" />
            <div>
              <H2 className="text-neutral-900 text-lg font-medium my-5">Electric vehicle option</H2>
              <P className="px-24">As we move towards a greener future, we ensure to provide you with the latest EVs so you can be part of the initiative.</P>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-8">
          <P className="text-neutral-500 text-base font-normal">What We Offer</P>
          <H2 className="text-neutral-900 text-3xl font-semibold my-2">Our offerings include the following services</H2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center text-sm my-5">
          <div className="relative p-1 my-3">
            <img className="mx-auto h-full w-full rounded-md" src="/images/services/business-travel.png" alt="" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center caption">
              <p className="font-bold text-primary">Business travel</p>
            </div>
          </div>
          <div className="relative p-1 my-3">
            <img className="mx-auto h-full w-full rounded-md" src="/images/services/travel-agencies.png" alt="" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center caption">
              <p className="font-bold text-primary">Travel agencies</p>
            </div>
          </div>
          <div className="relative p-1 my-3">
            <img className="mx-auto h-full w-full rounded-md" src="/images/services/event-planning.png" alt="" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center caption">
              <p className="font-bold text-primary">Event planning</p>
            </div>
          </div>
          <div className="relative p-1 my-3">
            <img className="mx-auto h-full w-full rounded-md" src="/images/services/complimentary-services.png" alt="" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center caption">
              <p className="font-bold text-primary">Complimentary services</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
