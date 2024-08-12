import Pic from 'rolnew/util/Pic';
import SupplierForm from './SupplierForm';

function SupplierFormCard() {
  return (
    <div>
      <SupplierForm />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative bg-[#223544] h-[67rem] xl:min-h-screen xl:h-[52rem]">

      <div className='min-h-screen h-[995px] max-w-[90rem] mx-auto my-auto'>
        <div className='sm:container sm:mx-auto top-4 lg:ml-4'>
          <div className='absolute w-full sm:w-1/2 z-[2] my-auto mx-auto top-[170px] xs:top-[280px] xs:w-[85%] xs:left-[40px] '>
            <div className='w-full md:mt-8 mx-auto left-0'>
              <div className="md:w-3/4 xs:w-full sm:w-full ">

                <h1 className="hidden md:block md:text-5xl md:font-bold md:text-[#FFF8F3] md:mt-2">
                  Providing exclusive and dependable chauffeur service indulgence
                </h1>
                <h1 className="sm:block font-sans text-[34px] font-bold leading-[30px] text-[#FFF8F3] pl-8 md:hidden">
                  Providing exclusive and dependable chauffeur service indulgence
                </h1>

              </div>
            </div>
          </div>


          <div className='absolute w-[450px] h-[626px] z-[2] my-auto top-[100px] right-[150px] lg:right-[150px] md:[right-80px] sm:right-50 md:ml-[80px]'>
            <div className='w-full mt-26 bottom-0'>
              <div className="hidden md:block lg:w-full">
                <h1 className='text-[30px] leading-9 text-center font-sans font-bold text-[#CED5E5] mr-6 mb-6'>Become A Supplier</h1>
                <SupplierFormCard />
                <p className='font-sans text-sm font-normal leading-[17.92px] text-center mt-8 text-[#B2B2B2]'>By continuing, you agree to RolDrive Company’s
                  Terms of Conditions and Privacy Policy
                </p>

              </div>
            </div>

          </div>
          <div className='absolute z-[2] px-6 bottom-[-70px] md:hidden w-full'>
            <h1 className='text-[30px] leading-9 text-center font-sans font-bold text-[#CED5E5] mr-6 mb-6'>Become A Supplier</h1>
            <SupplierFormCard />
            <p className='font-sans text-sm font-normal leading-[17.92px] text-center mt-8 text-[#B2B2B2]'>
              By continuing, you agree to RolDrive Company’s
              Terms of Conditions and Privacy Policy
            </p>

          </div>
        </div>
      </div>
      <div className="absolute mx-auto top-0 h-full w-1/2 hidden sm:block">
        <Pic src="/images/carimages/dashboard.png" alt="" objectFit="cover" />
        <div
          className="absolute right-0 top-0 h-full z-[1] w-full"
        //   style={{
        //     background:
        //       'linear-gradient(270deg, rgba(39, 60, 79, 0) 8.69%, rgba(39, 60, 79, 0.496) 24%, rgba(39, 60, 79, 0.8) 70.75%)',
        //   }}
        />
      </div>
      <div className='absolute mx-auto top-0 h-full inset-y-0 right-0 w-1/2 hidden sm:block '>
        <div className='w-full h-full'
          style={{
            background: 'linear-gradient(to right, rgba(8, 16, 23, 0.8),rgba(8, 16, 23, 1))',
          }} />


      </div>
      <div className="absolute top-[-360px] h-full w-full sm:hidden">
        <Pic src="/images/carimages/dashboard.png" alt="" objectFit="contain" />
        <div className="absolute right-0 top-0 h-full " />
      </div>
    </div>
  );
}

{/* <div className="max-w-[90rem] mx-auto">
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
                    {/* <BookingFormCard /> */}
{/* </div>
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
                {/* <BookingFormCard /> */}
{/* </div>
            </div> */}

{/* <div className="hidden gap-4 items-center mt-[4.75rem] xl:flex max-w-max px-6">
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
      </div> */} 