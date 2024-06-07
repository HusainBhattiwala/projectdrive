import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import { useContext } from 'react';
import Link from 'next/link';
import P from 'components/typography/P';
import { UtilityContext } from 'context/UtilityContext';
import formatDateTime from 'components/utils/formatDateTime';
import { MdOutlineBlock } from 'react-icons/md';

function FinishedBookingCard({
  item, downloadInvoice, sendMail, sendMailLoader, downloadLoader, formatPrice,
}) {
  const { eclipseText } = useContext(UtilityContext);
  return (
    <>
      {
      item?.ride_status === 'CANCELLED'
      && (
      <div className="w-full py-2 px-2 bg-red-100 rounded-t-lg text-red-800 font-semibold flex gap-x-2 items-center uppercase">
        {' '}
        <MdOutlineBlock className="font-bold" />
        {' '}
        Cancelled booking
      </div>
      )
    }
      <div className={`grid grid-cols-18 gap-x-1 py-2 mb-3 bg-white border-[#D9D9D9] border-[0.60px] hover:border  ${item?.ride_status === 'CANCELLED' ? 'border-red-800 border-t-0 rounded-b-lg hover:border-red-100 hover:bg-red-50' : 'rounded-lg hover:border-indigo-800 hover:bg-violet-50'}`}>
        <div className="col-span-2 flex flex-col items-center justify-center relative box-border text-center py-2">
          <Link href={`/corporate/booking/view-finished-booking?booking_id=${item?.booking_id}`} className="mb-1 text-zinc-800 !text-xs font-semibold break-words w-full underline">
            #
            {item?.booking_ref_no}
          </Link>
          <div className="justify-center items-center gap-2.5 inline-flex">
            <P className="text-orange-600 !text-xs font-semibold">{item?.booking_type}</P>
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center relative box-border  text-center py-2">
          <P className="text-center text-neutral-500 !text-xs font-medium leading-[18.22px] break-words w-full">{formatDateTime(item?.travel_date)}</P>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center relative box-border text-center py-2">
          <P className="text-center break-words">
            <span className="text-neutral-700 !text-xs font-medium leading-[18.22px]">{item?.booker_name}</span>
            <br />
            <span className="text-neutral-700 !text-xs font-medium  leading-[18.22px]">
              {item?.booker_mobile_cntrycd}
              {item?.booker_mobile}
            </span>
          </P>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center relative box-border text-center py-2">
          <P className="text-center break-words">
            <span className="text-neutral-700 !text-xs font-medium leading-[18.22px]">{item?.passenger_name}</span>
            <br />
            <span className="text-neutral-700 !text-xs font-medium  leading-[18.22px]">
              {item?.passenger_mobile_cntrycd}
              {item?.passenger_mobile}
            </span>
          </P>
          <div className="flex flex-wrap gap-y-1 w-full justify-center items-center">
            {
            item?.passenger_adult_cnt !== 0
            && (
            <div className="flex flex-row justify-center w-1/2 pr-1">
              <div className="relative w-3">
                <Image src="/images/global/User.svg" fill alt="User" />
              </div>
              <span className="-rotate-45 text-zinc-800 text-xs font-medium mt-1 px-1">+</span>
              <P className="text-zinc-800 text-xs font-medium leading-tight mt-1">{item?.passenger_adult_cnt}</P>
            </div>
            )
          }
            {
            item?.passenger_luggage_count !== 0
            && (

            <div className="flex flex-row justify-center w-1/2">
              <div className="relative w-3">
                <Image src="/images/global/luggage.svg" fill alt="luggage" />
              </div>
              <span className="-rotate-45 text-zinc-800 text-xs font-medium mt-1 px-1">+</span>
              <P className="text-zinc-800 text-xs font-medium leading-tight mt-1">{item?.passenger_luggage_count}</P>
            </div>
            )
          }
            {
            item?.passenger_child_cnt !== 0
            && (

            <div className="flex flex-row justify-center w-1/2 pr-1">
              <div className="relative w-3.5">
                <Image src="/images/global/child_primary.svg" fill alt="child_primary" />
              </div>
              <span className="-rotate-45 text-zinc-800 text-xs font-medium mt-1 px-1">+</span>
              <P className="text-zinc-800 text-xs font-medium leading-tight mt-1">{item?.passenger_child_cnt}</P>
            </div>
            )
          }
            {
            item?.passenger_infant_cnt !== 0
            && (

            <div className="flex flex-row justify-center w-1/2">
              <div className="relative w-4">
                <Image src="/images/global/infant_primary.svg" fill alt="infant_primary" />
              </div>
              <span className="-rotate-45 text-zinc-800 text-xs font-medium mt-1 px-1">+</span>
              <P className="text-zinc-800 text-xs font-medium leading-tight mt-1">{item?.passenger_infant_cnt}</P>
            </div>
            )
          }
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center relative box-border text-center py-2 overflow-visible">
          <div className="relative tooltip tooltip-right custom-tooltip tooltip-info cursor-pointer overflow-visible" data-tip={`${item?.pickup_location}`}>
            <P className="text-neutral-500 !text-xs text-left font-medium leading-[17.03px] break-words w-full">{eclipseText(item?.pickup_location, 30)}</P>
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center relative box-border text-center py-2 overflow-visible">
          {
          item?.drop_location && (
          <div className="relative tooltip tooltip-right custom-tooltip tooltip-info cursor-pointer overflow-visible" data-tip={`${item?.drop_location}`}>
            <P className="text-neutral-500 !text-xs text-left font-medium leading-[17.03px] break-words w-full">{eclipseText(item?.drop_location, 30)}</P>
          </div>
          )
        }
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center relative box-border  text-center py-2 px-1 break-words">
          <P className="text-neutral-500 !text-xs font-medium">{item?.provided_vehicle}</P>
          <div className="w-full break-words">
            <P className="text-orange-600 !text-xs font-semibold break-words w-full">{item?.vehicle_make}</P>
            <P className="text-neutral-500 !text-xs font-medium break-words w-full">
              {item?.vehicle_registration_no}
            </P>
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center relative box-border text-center py-2">
          <P className="text-center text-neutral-500 !text-xs font-semibold break-words w-full whitespace-nowrap">
            {formatPrice(item.tariff, item?.region_currencyrrency || 'GBP')}
          </P>
          <P className={`text-center ${item?.payment_type === 'PAID' ? 'text-green-600' : 'text-[red]'}  !text-xs font-semibold break-words w-full`}>{item?.payment_type}</P>
          <P className="text-center text-neutral-500 !text-xs font-semibold break-words w-full whitespace-nowrap">
            {item?.cost_center}
          </P>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center relative box-border text-center py-2 px-2">
          <P className="text-neutral-500 !text-xs font-medium break-words w-full">{item?.driver_name}</P>
          <P className="text-neutral-500 !text-xs font-medium">
            {item?.driver_mobile}
          </P>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center relative box-border text-center py-2">
          <div className="flex gap-[30px] flex-col">
            <div className="w-4 h-4 relative">
              {
             sendMailLoader && sendMailLoader === item?.booking_id
               ? (
                 <div role="status">
                   <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                     <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                   </svg>
                   <span className="sr-only">Loading...</span>
                 </div>
               )
               : <Image src="/images/icons/email.svg" className="cursor-pointer" alt="email" fill onClick={() => { sendMail(item?.booking_id, item?.region_id); }} />
            }
            </div>
            <div className="w-4 h-4 relative">
              {
             downloadLoader && downloadLoader === item?.booking_id
               ? (
                 <div role="status">
                   <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                     <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                   </svg>
                   <span className="sr-only">Loading...</span>
                 </div>
               )
               : <Image src="/images/icons/download.svg" className="cursor-pointer" alt="download" fill onClick={() => { downloadInvoice(item?.booking_id, item?.region_id); }} />
            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FinishedBookingCard;
