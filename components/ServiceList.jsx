/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
import H2 from 'components/typography/H2';
import H3 from 'components/typography/H3';
import P from 'components/typography/P';
import { Pic } from './ui/Pic';

export default function ServiceList() {
  return (
    <div className="container p-6 mx-auto">
      <P className="text-primary !text-[16px] text-center font-[400] mb-[10px]">Services List</P>
      <H2 className=" !text-[24px] text-center font-[700]">WHAT WE&apos;RE OFFERING</H2>
      <div className="grid gap-6 my-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div className="flex my-4">
          <div className="mr-4">
            <div className="h-16 w-16">
              <Pic src="/images/icons/icon-travel.png" className="object-contain" />
            </div>
          </div>
          <div>
            <H3 className="tetx-black !text-[16px] font-[600]">Airport pickup and drop-off services</H3>
            <P className="!text-[16px] font-[400]">Arrive or Depart in Luxury and Style. Rejuvenated for your next activity.</P>
          </div>
        </div>
        <div className="flex my-4">
          <div className="mr-4">
            <div className="h-16 w-16">
              <Pic src="/images/icons/icon-travel.png" className="object-contain" />
            </div>
          </div>
          <div>
            <H3 className="tetx-black !text-[16px] font-[600]">Intercity transfer services</H3>
            <P className="!text-[16px] font-[400]">Move at your own pace as you enjoy a long drive and appreciate the scenery.</P>
          </div>
        </div>
        <div className="flex my-4">
          <div className="mr-4">
            <div className="h-16 w-16">
              <Pic src="/images/icons/icon-travel.png" className="object-contain" />
            </div>
          </div>
          <div>
            <H3 className="tetx-black !text-[16px] font-[600]">Sightseeing tour services</H3>
            <P className="!text-[16px] font-[400]">Get to know the city you love more through knowledgeable chauffeurs.</P>
          </div>
        </div>
        <div className="flex my-4">
          <div className="mr-4">
            <div className="h-16 w-16">
              <Pic src="/images/icons/icon-travel.png" className="object-contain" />
            </div>
          </div>
          <div>
            <H3 className="tetx-black !text-[16px] font-[600]">Corporate chauffeur services</H3>
            <P className="!text-[16px] font-[400]">
              Whether you’re attending a private party or a large-scale gathering, get there making heads
              turn.

            </P>
          </div>
        </div>
        <div className="flex my-4">
          <div className="mr-4">
            <div className="h-16 w-16">
              <Pic src="/images/icons/icon-travel.png" className="object-contain" />
            </div>
          </div>
          <div>
            <H3 className="tetx-black !text-[16px] font-[600]">Wedding transfer services</H3>
            <P className="!text-[16px] font-[400]">It’s a glamorous occasion that demands you look your best. A memory of a lifetime.</P>
          </div>
        </div>
        <div className="flex my-4">
          <div className="mr-4">
            <div className="h-16 w-16">
              <Pic src="/images/icons/icon-travel.png" className="object-contain" />
            </div>
          </div>
          <div>
            <H3 className="tetx-black !text-[16px] font-[600]">Private jet transfer services</H3>
            <P className="!text-[16px] font-[400]">
              Experience elegance as we transport you to or from the terminal of your private helicopter
              or jet.
            </P>
          </div>
        </div>
      </div>

    </div>
  );
}
