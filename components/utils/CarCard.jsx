import Image from 'next/image';
import H3 from 'components/typography/H3';
import P from 'components/typography/P';

export default function CarCard({
  img, title, desc, className,
}) {
  return (
    <div className={`flex flex-col lg:px-20 md:px-10 px-2 my-14 ${className}`}>
      <div className="lg:h-72 h-48 w-full">
        <Image
          src={img}
          className="!relative object-contain h-full w-full px-6"
          fill
        />
      </div>
      <div className="text-center pb-2 text-white">
        <H3 className="!text-[1.75rem] !leading-[2.125rem] !font-bold my-[1.75rem]">{title}</H3>
        <P className="!text-base font-robo !leading-[1.5rem]">{desc}</P>
      </div>
    </div>
  );
}
