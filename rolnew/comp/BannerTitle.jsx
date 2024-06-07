function BannerTitle({ mainTitle, description }) {
  return (
    <div className="">
      <div className="flex flex-col sm:gap-y-3 gap-y-1">
        <h1 className="font-medium sm:leading-9 leading-tight md:text-center text-white md:text-5xl text-left text-4xl">
          {mainTitle}
        </h1>
        <p className="md:text-base md:text-center text-[#B2B2B2] font-normal md:leading-5 text-left text-xl leading-[inherit]">{description}</p>
      </div>
    </div>
  );
}

export default BannerTitle;
