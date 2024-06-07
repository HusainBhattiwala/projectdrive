/* eslint-disable max-len */
// import Link from 'next/link';
import H2 from '../typography/H2';
import P from '../typography/P';
import { Pic } from '../ui/Pic';

export default function Vehicle({ tag1, ...props }) {
  return (
    <div className="container !mx-auto mb-10 mt-6">
      <div className="bg-[#F1ECE2] grid md:grid-cols-2 grid-cols-1 rounded-xl">
        <div className="relative h-80 md:h-auto">
          <div className="bg-primary rounded-tl-xl rounded-bl-xl rounded-br-[200px] sm:rounded-tr-none rounded-tr-xl lg:w-[60%] z-0 absolute h-[100%] p-5">
            <span className="inline-block px-5 py-2 m-2 font-semibold text-black bg-white rounded-md">
              {tag1 || 'Free Wifi'}
            </span>
            <span className="inline-block px-5 py-2 m-2 font-semibold text-black bg-white rounded-md">
              {props.tag2 || 'Water Available'}
            </span>
            <span className="inline-block px-5 py-2 m-2 font-semibold text-black bg-white rounded-md">
              {props.tag3 || 'Bags Medium'}
            </span>
          </div>
          <div className="w-[90%] ml-[5%] absolute bottom-5 z-2 ">
            <Pic src={props.vimg} />
          </div>
        </div>

        <div className="py-6 px-4 lg:px-10 text-[#403D51] ">
          <H2 className=" font-bold text-black !text-[28px] p-2">
            {props.vname}
          </H2>
          <P className="p-2 text-justify">{props.vdetails}</P>

          <div className="grid grid-cols-2 my-5">
            <div className="flex p-2 mt-3">
              <div className="rounded-[50%] bg-[#F9CD85] w-[36px] h-[36px] mr-3 ">
                <div className=" w-[36px] h-[36px] !p-[5px] mt-[2px] object-contain">
                  <Pic className="p-[2px]" src="/images/icons/users.png" />
                </div>
              </div>

              <div>
                <P>Passengers</P>
                <P className="font-semibold">
                  {props.passengers}
                </P>
              </div>
            </div>
            <div className="flex p-2 mt-3">
              <div className="rounded-[50%] bg-[#F9CD85] w-[36px] h-[36px] mr-3 ">
                <div className=" w-[36px] h-[36px] !p-[5px] object-contain">
                  <Pic className="p-[2px]" src="/images/icons/GPS.png" />
                </div>
              </div>
              <div>
                <P>GPS Tracking</P>
                <P className="font-semibold ">Available</P>
              </div>
            </div>
            <div className="flex p-2 mt-3">
              <div className="rounded-[50%] bg-[#F9CD85] w-[36px] h-[36px] mr-3 ">
                <div className=" w-[36px] h-[36px] !p-[8px] -mt-[2px] object-contain">
                  <Pic className="p-[2px]" src="/images/icons/BigBag.png" />
                </div>
              </div>
              <div>
                <P>Luggage</P>
                <P className="font-semibold">
                  {props.bags}
                </P>
              </div>
            </div>
            <div className="flex p-2 my-3">
              <div className="rounded-[50%] bg-[#F9CD85] w-[36px] h-[36px] mr-3">
                <Pic className="p-2 " src="/images/icons/Child.png" />
              </div>
              <div>
                <P>Child Seat</P>
                <P className="font-semibold">On Demand</P>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
