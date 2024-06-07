import H2 from 'components/typography/H2';
import P from 'components/typography/P';
import { Pic } from 'components/ui/Pic';
// import Header from 'components/shared/Header';
// import { LoginProvider } from 'context/LoginContext';
// import Providers from './Providers';

export default function NotFound() {
  return (
    <div>
      {/* <Providers>
        <LoginProvider>
          <Header />
        </LoginProvider>
      </Providers> */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <section className="bg-[#CBD2DA] min-h-[91vh] md:min-h-[90vh]"> */}
      <section className="bg-[#CBD2DA] min-h-screen">
        <div className="container relative z-20 py-20 mx-auto sm:py-10">
          <H2 className="text-[#605E5F] text-center font-semibold lg:!text-[30px] md:!text-[26px] sm:!text-[24px] !text-[20px] my-6">
            Oops!
          </H2>
          <div className="w-full h-full mx-auto sm:w-3/4 md:w-2/3">
            <Pic src="/images/not-found.png" className="object-contain" />
          </div>
          <H2 className="text-[#605E5F] text-center font-bold lg:!text-[30px] md:!text-[26px] sm:!text-[24px] !text-[20px]">
            That page doesn&apos;t exist
          </H2>
          <P className="text-center text-[#605E5F] font-semibold my-2">
            Sorry, the page you’re looking for could not be found.
          </P>
          <div className="flex justify-center gap-4 mt-6 mb-20">
            <a
              href="/"
              className="!py-2 rounded-md px-5 text-white bg-primary hover:bg-black border-primary hover:!border-black border"
            >
              Go Home
            </a>
            <a
              href="/contact-us"
              className="!py-2 rounded-md px-5 bg-transparent hover:bg-black border-primary hover:!border-black border !text-primary hover:!text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
