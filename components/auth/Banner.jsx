import Link from 'next/link';

function Banner({ title = '', description = '' }) {
  return (
    <div className="flex justify-center items-center md:min-h-[100svh] min-h-[331px] bg-[url('/images/login/loginbanner.svg')] sticky top-0 xl:px-[110px] lg:px-20 md:px-10 sm:px-8 px-4 w-full 2xl:container 2xl:px-[140px] bg-no-repeat bg-cover">

      <div className="z-[2] h-fit sm:min-h-[350px] flex flex-col justify-between">
        <div>
          <h1 className="2xl:text-[64px] sm:text-5xl text-3xl xl:leading-[70px] font-bold text-[#E5EAFA] text-shadow">{title}</h1>
          <h2 className="text-[#FFF8F3] sm:text-xl text-base font-medium">{description}</h2>
        </div>
        <div className="sm:block hidden">
          <p className="text-[#FFF8F3] sm:text-2xl text-base font-bold">Get The App Now</p>
          <Link href="/rownew">
            <img src="/images/navbar/download.png" className="w-[200px] h-[40px] mt-4" alt="download" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
