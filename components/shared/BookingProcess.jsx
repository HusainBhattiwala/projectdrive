import Button from 'components/ui/Button';

export default function BookingProcess() {
  return (
    <section className="">
      <div className="flex bg-gradient-to-r from-neutral-900 to-zinc-700  flex-col gap-28  px-10 py-10 space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="flex items-center justify-center w-full h-full lg:w-1/2 sm:mb-0">
          <img className="object-fill w-full h-full mx-auto rounded-md lg:max-w-2xl" src="images/banner/seamless-booking.png" alt="" />
        </div>
        <div className="w-full lg:w-1/2 -mt-20">
          <div className="lg:max-w-lg">
            <h1 className="text-white text-3xl  font-semibold tracking-wide">
              Seamless Booking Process
            </h1>
          </div>
          <div className="mt-8 space-y-5 flex flex-col items-start justify-start">
            <p className="flex justify-items-start -mx-2 text-gray-700 dark:text-gray-200">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 bg-orange-600 text-white rounded-full flex items-center justify-center" viewBox="0 0 24 24">
                <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="font-bold text-white">1</text>
              </svg> */}
              <div className="w-6 h-6 mx-2 bg-orange-600 text-white rounded-full flex items-center justify-center">
                <p className="font-medium text-sm text-white">1</p>
              </div>
              <span className="mx-2 text-white ">Create account</span>
            </p>
            <p className="flex justify-items-start -mx-2 text-gray-700 dark:text-gray-200">
              <div className="w-6 h-6 mx-2 bg-orange-600 text-white rounded-full flex items-center justify-center">
                <p className="font-medium text-sm text-white">2</p>
              </div>
              <span className="mx-2 text-white ">Add Passenger</span>
            </p>
            <p className="flex justify-items-start -mx-2 text-gray-700 dark:text-gray-200">
              <div className="w-6 h-6 mx-2 bg-orange-600 text-white rounded-full flex items-center justify-center">
                <p className="font-medium text-sm text-white">3</p>
              </div>
              <span className="mx-2 text-white ">Choose Location</span>
            </p>
            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
              <div className="w-6 h-6 mx-2 bg-orange-600 text-white rounded-full flex items-center justify-center">
                <p className="font-medium text-sm text-white">4</p>
              </div>
              <span className="mx-2 text-white ">Choose a date and time</span>
            </p>
            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
              <div className="w-6 h-6 mx-2 bg-orange-600 text-white rounded-full flex items-center justify-center">
                <p className="font-medium text-sm text-white">5</p>
              </div>
              <span className="mx-2 text-white ">Select a vehicle</span>
            </p>
            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
              <div className="w-6 h-6 mx-2 bg-orange-600 text-white rounded-full flex items-center justify-center">
                <p className="font-medium text-sm text-white">6</p>
              </div>
              <span className="mx-2 text-white ">Select payment method</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex bg-gradient-to-r from-neutral-900 to-zinc-700  flex-col px-10 py-10 space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center -mt-16">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-white text-3xl font-semibold tracking-wide mt-10">
              Get an instant quote
            </h1>
            <p className="text-white mt-4  text-opacity-80 text-base font-normal leading-relaxed">
              Embark on a journey of seamless luxury with RolDrive. Contact us today for an instant quote tailored to your travel needs. Whether it&apos;s an airport transfer, a corporate event, or a special occasion, our team is ready to provide you with a personalised and competitive offer.
            </p>
          </div>
          <div className="px-6 py-10  mx-auto lg:flex lg:justify-between lg:items-center">
            <div className="flex items-center justify-self-auto gap-20">
              <img src="/images/cards/mastercard.png" alt="" />
              <img src="/images/cards/visa.png" alt="" />
              <img src="/images/cards/maestro.png" alt="" />
              <img src="/images/cards/american-express.png" alt="" />
            </div>
          </div>
          <div className="mt-6">
            <Button
              kind="primary"
              className="normal-case !text-md px-5 sm:px-8 py-[10px]"
            >
              <span className="uppercase">
                Get Quote
              </span>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="images/banner/instant-quote.png" alt="" />
        </div>
      </div>
    </section>

  );
}
