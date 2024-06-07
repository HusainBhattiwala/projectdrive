import { BackgroundImage } from './ui/BackgroundImage';

export default function PlainBanner() {
  return (
    <div className="md:pt-[115px] md:pb-24 xl:px-14 lg:px-10 px-4 pt-10 pb-8 bg-center w-full h-96 relative -mt-20">
      <div className="absolute top-0 left-0 w-full h-full">
        <BackgroundImage
          src="/images/banner/faqs-banner.png"
          alt="booking_bg"
          className="w-full h-auto object-cover brightness-[0.7]"
        />
      </div>
    </div>
  );
}
