/* eslint-disable max-len */
import P from 'components/typography/P';
import H2 from '../typography/H2';

export default function FourFeatures() {
  return (
    <section>
      <div className="container mx-auto md:pb-8 md:pt-2 px-4 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center text-sm my-5">
          <div className="md:p-5 sm:p-2 p-1 align-between my-3">
            <img
              className="mx-auto h-24"
              src="/images/icons/money.svg"
              alt="Fixed Price"
            />
            <div>
              <H2 className="text-primary !text-[18px] font-semibold my-5">
                Fixed Price
              </H2>
              <P className="!font-robo">
                Forget about extra costs or hidden fees because our prices are
                all-inclusive and include tariffs, tips, and other charges.
              </P>
            </div>
          </div>
          <div className="md:p-5 sm:p-2 p-1 align-between my-3">
            <img
              className="mx-auto h-24"
              src="/images/icons/handshake.svg"
              alt="Meet And Greet"
            />
            <div>
              <H2 className="text-primary !text-[18px] font-semibold my-5">
                Free Meet And Greet
              </H2>
              <P className="!font-robo">
                Our excellent hospitality and customer service make airport
                transfers a pleasure. We appreciate our valued clients who place
                their trust in us and prioritize their satisfaction.
              </P>
            </div>
          </div>
          <div className="md:p-5 sm:p-2 p-1 align-between my-3">
            <img
              className="mx-auto h-24"
              src="/images/icons/timeclock.svg"
              alt="24/7 Hours"
            />
            <div>
              <H2 className="text-primary !text-[18px] font-semibold my-5">
                60 Mins Free Waiting Time
              </H2>
              <P className="!font-robo">
                When it comes to punctuality, we never let our customers down.
                On-time pickups and drop-offs are our speciality and
                distinguishing feature of our services. As a result, you can
                forget about late arrivals.
              </P>
            </div>
          </div>
          <div className="md:p-5 sm:p-2 p-1 align-between my-3">
            <img
              className="mx-auto h-24"
              src="/images/icons/nameboard.svg"
              alt="Name Board"
            />
            <div>
              <H2 className="text-primary !text-[18px] font-semibold my-5">
                Arrival Name Board
              </H2>
              <P className="!font-robo">
                Find an immaculately dressed premium chauffeur in a luxury
                vehicle with your name on a paging board just outside the
                terminal. This is how we prefer to treat our clients!
              </P>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
