import H2 from 'components/typography/H2';
import P from 'components/typography/P';
import { Pic } from 'components/ui/Pic';

export default function SingleCarSlide({
  img, name, passengers, bags,
}) {
  return (
    <div className="flex flex-col justify-end">
      <div className="w-full !min-h-[320px]">
        <Pic
          src={img || '/images/cars/car5.png'}
          className="object-contain !min-h-[320px]"
        />
      </div>
      <div className="md:ml-16">
        <H2 className="text-white !text-[28px] font-[700]">
          {name}
        </H2>
        <P className="text-[#6B6B6B] font-robo mt-1">Licensed vehicles, professional drivers. Licensed vehicles, professional drivers</P>
      </div>
      <div className="grid grid-cols-4 justify-end md:ml-14">
        <div className="flex p-2 mt-2 max-w-max">
          <div className="rounded-[50%] bg-white w-[36px] h-[36px] mr-3 ">
            <div className=" w-[36px] h-[36px] !p-[5px] mt-[2px] object-contain">
              <Pic className="p-[2px]" src="/images/icons/users.png" />
            </div>
          </div>

          <div>
            <P className="font-[500] text-[#dedede]">Passengers</P>
            <P className="font-semibold font-robo text-white">
              {passengers || '3 Passengers'}
            </P>
          </div>
        </div>
        <div className="flex p-2 mt-3 max-w-max">
          <div className="rounded-[50%] bg-white w-[36px] h-[36px] mr-3 ">
            <div className=" w-[36px] h-[36px] !p-[5px] object-contain">
              <Pic className="p-[2px]" src="/images/icons/GPS.png" />
            </div>
          </div>
          <div>
            <P className="font-[500] text-[#dedede]">GPS Tracking</P>
            <P className="font-semibold font-robo text-white">Available</P>
          </div>
        </div>
        <div className="flex p-2 mt-3 max-w-max">
          <div className="rounded-[50%] bg-white w-[36px] h-[36px] mr-3 ">
            <div className=" w-[36px] h-[36px] !p-[8px] -mt-[2px] object-contain">
              <Pic className="p-[2px]" src="/images/icons/BigBag.png" />
            </div>
          </div>
          <div>
            <P className="font-[500] text-[#dedede]">Luggage</P>
            <P className="font-semibold font-robo text-white">
              {bags || '3 Bags'}
            </P>
          </div>
        </div>
        <div className="flex p-2 my-3 max-w-max">
          <div className="rounded-[50%] bg-white w-[36px] h-[36px] mr-3">
            <Pic className="p-2 " src="/images/icons/Child.png" />
          </div>
          <div>
            <P className="font-[500] text-[#dedede]">Child Seat</P>
            <P className="font-semibold font-robo text-white">Available</P>
          </div>
        </div>
      </div>
    </div>

  );
}
