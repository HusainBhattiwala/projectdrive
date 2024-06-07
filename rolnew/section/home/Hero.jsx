import Pic from 'rolnew/util/Pic';
import BookingForm from './BookingForm';

function BookingFormCard() {
  return (
    <div
      className="border border-white/15"
      style={{
        background:
          'linear-gradient(227.09deg, rgba(34, 53, 68, 0.81) 33.81%, rgba(34, 53, 68, 0.77) 99.1%)',
        boxShadow: '0px 2px 10px 2px rgba(34, 53, 68, 0.48)',
        backdropFilter: 'blur(16px)',
        borderRadius: '24px',
        padding: '32px 24px',
      }}
    >
      <BookingForm />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative h-[67rem] xl:min-h-screen xl:h-[52rem]">
      <div className="max-w-[90rem] mx-auto">
        <div className="xl:container mx-auto">
          <div className="absolute z-[2]">
            <div className="flex flex-col xl:flex-row gap-8 xl:gap-[12rem] w-full mt-32">
              <div className="max-w-max mx-auto xl:mx-0 px-6 w-full xl:w-[55%] flex-none xl:pt-[4rem] flex gap-8 flex-col justify-between">
                <div className="">
                  <h1 className="text-4xl sm:text-5xl font-bold text-[#EC5C29]">
                    Luxury
                  </h1>
                  <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 sm:mt-4">
                    Chauffeur Service
                  </h1>
                  <p className="font-medium mt-4">
                    Your exclusive and dependable chauffeur service indulgence
                  </p>
                  <div className="xl:hidden py-8">
                    <BookingFormCard />
                  </div>
                </div>
                <div className="">
                  <p className="text-2xl font-bold text-center sm:text-left text-[#FFF8F3] sm:text-[#CED5E5]">
                    Get The App Now
                  </p>
                  <button
                    type="button"
                    className="h-16 w-full sm:w-60 mt-2 pop hidden sm:block"
                  >
                    <Pic src="/rolnew/home/download-app.png" alt="download" />
                  </button>
                  <button
                    type="button"
                    className="h-16 w-full sm:w-60 mt-2 pop sm:hidden"
                  >
                    <Pic
                      src="/rolnew/home/download-app-mobile.png"
                      alt="download"
                    />
                  </button>
                  <div className="flex gap-2 sm:gap-4 items-center mt-8 xl:hidden">
                    {['call', 'email'].map((item) => (
                      <button
                        type="button"
                        aria-label={item}
                        className="w-1/2 flex-none h-6 pop"
                      >
                        <img
                          src={`/rolnew/home/${item}.svg`}
                          alt=""
                          className="h-full w-full"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="max-w-max px-6 mx-auto xl:mx-0 w-full hidden xl:block xl:w-[45%] flex-none pt-[2rem]">
                <BookingFormCard />
              </div>
            </div>

            <div className="hidden gap-4 items-center mt-[4.75rem] xl:flex max-w-max px-6">
              {['call', 'email'].map((item) => (
                <button
                  type="button"
                  aria-label={item}
                  className="w-1/2 flex-none h-6 pop"
                >
                  <img
                    src={`/rolnew/home/${item}.svg`}
                    alt=""
                    className="h-full w-full"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 h-full w-full hidden sm:block">
        <Pic src="/rolnew/home/hero.png" alt="" objectFit="cover" />
        <div
          className="absolute right-0 top-0 h-full z-[1] w-full"
          style={{
            background:
              'linear-gradient(270deg, rgba(39, 60, 79, 0) 8.69%, rgba(39, 60, 79, 0.496) 24%, rgba(39, 60, 79, 0.8) 70.75%)',
          }}
        />
      </div>
      <div className="absolute top-0 h-full w-full sm:hidden">
        <Pic src="/rolnew/home/mobile-hero.png" alt="" objectFit="cover" />
        <div className="absolute right-0 top-0 h-full z-[1] w-full bg-gradient-to-t from-transparent to-[#273c4fcc]" />
      </div>
    </div>
  );
}
