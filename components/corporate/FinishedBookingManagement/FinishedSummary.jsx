'use client';

import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import api from 'components/utils/api';
import UseDebounce from 'components/addressautocomplete/UseDebounce';
import H2 from 'components/typography/H2';
import P from 'components/typography/P';
import Loader from 'components/shared/Loader';
import { UtilityContext } from 'context/UtilityContext';
import useGeneratexlsx from 'hooks/useGeneratexlsx';
import FinishedBookingCard from './FinishedBookingCard';
import FinishedBookingTop from './FinishedBookingTop';

export default function FinishedSummary() {
  const { formatPrice } = useContext(UtilityContext);
  const [bookingList, setBookingList] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const [bookingId, setBookingId] = useState('');
  const [dateRange, setDateRange] = useState([]);
  const [userRegion, setUserRegion] = useState({
    region_short_name: 'All',
    region_id: '',
  });
  const debouncedSearchId = UseDebounce(bookingId, 500);
  const debouncedDateRange = UseDebounce(dateRange, 500);

  const [sendMailLoader, setSendMailLoader] = useState('');
  const [downloadLoader, setDownloadLoader] = useState('');

  const { isExcelReady, exportToExcel } = useGeneratexlsx();

  useEffect(() => {
    const filterBooking = async () => {
      let formDate;
      let toDate;
      if (debouncedDateRange && debouncedDateRange[0]) {
        const originalDate = new Date(debouncedDateRange[0]);
        const modifiedDate = new Date(originalDate);
        formDate = modifiedDate.toDateString();
      }
      if (debouncedDateRange && debouncedDateRange[1]) {
        const originalDate = new Date(debouncedDateRange[1]);
        const modifiedDate = new Date(originalDate);
        toDate = modifiedDate.toDateString();
      }
      const response = await api.get(`/corporate/booking?from_date=${encodeURIComponent(formDate || '')}&to_date=${encodeURIComponent(toDate || '')}&region_id=${userRegion?.region_id || ''}&ride_status=f&search_text=${encodeURIComponent(debouncedSearchId || '')}`);
      if (response?.data?.length > 0) {
        setBookingList(response?.data);
      } else {
        setBookingList([]);
      }
      setShowLoader(false);
    };
    setShowLoader(true);
    filterBooking();
  }, [debouncedSearchId, debouncedDateRange, userRegion?.region_id]);

  const sendMail = async (mailBookingId, regionId) => {
    setSendMailLoader(mailBookingId);
    const payload = {
      mail_type: 'CUSTOMER_INVOICE',
      display: true,
      download: false,
      region_id: regionId,
    };

    const response = await api.post(`/mailer/mail/${mailBookingId}`, payload);
    if (response?.data?.data) {
      const emailData = response?.data?.data ? response?.data?.data : [];
      const primaryRecipient = emailData.to[0];
      const additionalRecipient = emailData.cc[0];
      const emailHtml = emailData.html_content;
      const mailPayload = {
        mail_type: 'CUSTOMER_INVOICE',
        display: false,
        html_content: emailHtml,
        cc: additionalRecipient,
        to: primaryRecipient,
        region_id: regionId,
      };

      const mailSend = await api.post(`/mailer/mail/${mailBookingId}`, mailPayload);
      if (mailSend?.data?.status === 1) {
        setSendMailLoader('');
        toast.success(
          mailSend?.message,
          {
            autoClose: 3000,
            theme: 'colored',
          },
        );
        toast.clearWaitingQueue();
      } else {
        toast.error(
          mailSend?.message,
          {
            autoClose: 3000,
            theme: 'colored',
          },
        );
        toast.clearWaitingQueue();
      }
    } else {
      setSendMailLoader('');
      toast.error(
        'Mail send failed.',
        {
          autoClose: 3000,
          theme: 'colored',
        },
      );
      toast.clearWaitingQueue();
    }
  };

  const downloadInvoice = async (mailBookingId, regionId) => {
    setDownloadLoader(mailBookingId);
    const payload = {
      mail_type: 'CUSTOMER_INVOICE',
      display: false,
      download: true,
      region_id: regionId,
    };
    const response = await api.post(`/mailer/mail/${mailBookingId}`, payload);
    if (response.data.data) {
      const a = document.createElement('a');
      const objectUrl = response.data.data;
      a.href = objectUrl;
      a.target = '_blank';
      a.download = 'Finished';
      a.click();
      URL.revokeObjectURL(objectUrl);
      setDownloadLoader('');
      toast.success(
        response?.message,
        {
          autoClose: 3000,
          theme: 'colored',
        },
      );
      toast.clearWaitingQueue();
    } else {
      setDownloadLoader('');
      toast.error(
        'Download invoice failed.',
        {
          autoClose: 3000,
          theme: 'colored',
        },
      );
      toast.clearWaitingQueue();
    }
  };

  const exportDataToExcel = () => {
    const keysToExport = [
      'booking_ref_no',
      'booking_type',
      'booker_name',
      'passenger_name',
      'travel_date',
      'pickup_location',
      'drop_location',
      'preferred_vehicle',
      'supplier_org_name',
      'supplier_tariff',
      'tariff',
    ]; // Specify the keys to export

    const headersToExport = [
      'Booking Ref No',
      'Booking Type',
      'Booker Name',
      'Passenger Name',
      'Travel Date',
      'Pickup Location',
      'Drop Location',
      'Preferred Vehicle',
      'Supplier Name',
      'Supplier Tariff',
      'Tariff',
    ]; // Specify the headers

    const currentDate = new Date();

    const filename = `finished_booking_summary_${currentDate
      .getDate()
      .toString()
      .padStart(2, '0')}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${currentDate.getFullYear()}`;

    exportToExcel(
      bookingList,
      keysToExport,
      headersToExport,
      filename,
    );
  };

  return (
    <div className="2xl:container mx-auto">
      <div className="pb-2 md:pb-8 w-auto relative">
        <div className="px-[15px] pb-4 md:pb-0 rounded-lg flex items-center flex-col relative bg-white flex-nowrap overflow-x-auto mt-0 w-full">
          <div className="w-full overflow-x-auto flex-nowrap mx-auto min-w-[950px] min-h-[80vh]">
            <FinishedBookingTop dateRange={dateRange} setDateRange={setDateRange} bookingId={bookingId} setBookingId={setBookingId} userCountry={userRegion} setUserCountry={setUserRegion} exportDataToExcel={exportDataToExcel} showExcelDownload={bookingList} isReady={isExcelReady} />
            <div className="h-12 w-full lg:flex-row justify-between items-center mt-3 uppercase sticky top-0 bg-white md:flex" />
            {
              bookingList.length === 0 && !showLoader && (
                <div className="flex items-center justify-center flex-col min-h-[35vh] my-auto">
                  <div className="w-28 h-28 relative">
                    <Image src="/images/global/empty-box.png" fill alt="empty-box" />
                  </div>
                  <H2>No Data Available</H2>
                </div>
              )
            }

            {
            bookingList.length > 0 && !showLoader
              && (
                <>
                  <div className="grid grid-cols-18 gap-x-1 items-center text-center pb-3">
                    <div className="col-span-2">
                      <P className="!text-xs font-medium w-full break-words">
                        BOOKING #
                      </P>
                    </div>
                    <div className="col-span-2">
                      <P className="!text-xs font-medium w-full break-words"> DATE & TIME</P>
                    </div>
                    <div className="col-span-2">
                      <P className="!text-xs font-medium w-full break-words">ACCOUNT</P>
                    </div>
                    <div className="col-span-2">
                      <P className="!text-xs font-medium w-full break-words">PASSENGER</P>
                    </div>
                    <div className="col-span-2 text-left">
                      <P className="!text-xs font-medium w-full break-words">PICKUP</P>
                    </div>
                    <div className="col-span-2 text-left">
                      <P className="!text-xs font-medium w-full break-words">DROP-OFF</P>
                    </div>
                    <div className="col-span-2">
                      <P className="!text-xs font-medium w-full break-words text-left pl-4">VEHICLE</P>
                    </div>
                    <div className="col-span-2">
                      <P className="!text-xs font-medium w-full break-words -ml-6">COST & COST CENTER</P>
                    </div>
                    <div className="col-span-1">
                      <P className="!text-xs font-medium w-full break-words -ml-6">DRIVER</P>
                    </div>
                    <div className="col-span-1 text-right">
                      <P className="!text-xs font-medium w-full break-words -ml-3">ACTION</P>
                    </div>
                  </div>
                  <>
                    {bookingList.map((item) => (
                      <FinishedBookingCard item={item} key={item?.booking_id} downloadInvoice={downloadInvoice} sendMail={sendMail} sendMailLoader={sendMailLoader} downloadLoader={downloadLoader} formatPrice={formatPrice} />
                    ))}
                  </>
                </>
              )
            }
            {
              showLoader
              && <Loader />
            }
          </div>
        </div>
      </div>
    </div>
  );
}
