'use client';

import UseDebounce from 'components/addressautocomplete/UseDebounce';
import InvoiceTop from 'components/corporate/InvoicesManagemant/InvoiceTop';
import Loader from 'components/shared/Loader';
import H2 from 'components/typography/H2';
import P from 'components/typography/P';
import Button from 'components/ui/Button';
import api from 'components/utils/api';
import formatDateTime from 'components/utils/formatDateTime';
import { UtilityContext } from 'context/UtilityContext';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const bookingStatus = [
  {
    value: '',
    label: 'All Booking',
  },
  {
    value: 'PAID',
    label: 'Paid',
  },
  {
    value: 'DUE',
    label: 'Due',
  },
  {
    value: 'OVERDUE',
    label: 'Overdue',
  },
  {
    value: 'CANCELLED',
    label: 'Cancelled',
  },
  {
    value: 'PARTLY_PAID',
    label: 'Partly Paid',
  },
];

export default function InvoicePage() {
  const { formatPrice } = useContext(UtilityContext);
  const [showLoading, setShowLoading] = useState(true);
  const [invoiceData, setInvoiceData] = useState([]);
  const [showMailLoader, setShowMailLoader] = useState('');
  const [showDownloadLoader, setShowDownloadLoader] = useState('');
  const [loadingInvoice, setLoadingInvoice] = useState(false);
  const today = new Date();
  const month = today.toLocaleString('default', { month: 'short' });
  const year = today.getFullYear();
  const [searchText, setSearchText] = useState('');
  const [dateRange, setDateRange] = useState([]);
  const debouncedSearchText = UseDebounce(searchText, 500);
  const debouncedDateRange = UseDebounce(dateRange, 500);
  const [selectedDateTime, setSelectedDateTime] = useState({
    label: `${month}, ${year}`,
    value: `${today.getMonth() + 1}, ${year}`,
  });
  const [userRegion, setUserRegion] = useState({
    region_short_name: 'All',
    region_id: '',
  });
  const [invoiceMonthList, setInvoiceMonthList] = useState([]);
  const [selectedBookingStatus, setSelectedBookingStatus] = useState(bookingStatus[0]);
  useEffect(() => {
    const getFilterData = async () => {
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
      setShowLoading(true);
      const queryParam = `month=${formDate ? '' : Number(selectedDateTime.value.split(',')[0])}&year=${formDate ? '' : Number(selectedDateTime.value.split(',')[1])}&status=${selectedBookingStatus?.value}&search_text=${debouncedSearchText}&from_date=${encodeURIComponent(formDate || '')}&to_date=${encodeURIComponent(toDate || '')}&region_id=${userRegion?.region_id}&booker_id=`;
      const response = await api.get(`/corporate/invoices?${queryParam}`);
      setShowLoading(false);
      if (response?.data?.invoiceSummary) {
        setInvoiceData(response?.data?.invoiceSummary);
        if (response?.data?.invoiceMonth.length > 0) {
          const monthYearList = response?.data?.invoiceMonth.map((item) => {
            // eslint-disable-next-line no-unsafe-optional-chaining
            const date = new Date(new Date().getFullYear(), item?.month - 1, 1);
            const monthName = date.toLocaleString('en-US', { month: 'short' });
            return {
              label: `${monthName}, ${item?.year}`,
              value: `${item?.month}, ${item?.year}`,
            };
          });
          setInvoiceMonthList(monthYearList);
        }
      } else {
        toast.error(
          'Something went wrong',
          {
            autoClose: 3000,
            theme: 'colored',
          },
        );
        toast.clearWaitingQueue();
      }
    };
    getFilterData();
  }, [selectedDateTime, debouncedSearchText, userRegion, selectedBookingStatus, debouncedDateRange]);

  const sendMail = async (invoiceId) => {
    setLoadingInvoice(true);
    setShowMailLoader(invoiceId);
    const payload = {
      display: false,
      invoice_id: invoiceId,
    };

    const response = await api.post('/invoice/email', payload);
    setLoadingInvoice(false);
    setShowMailLoader('');
    if (response?.data?.invoice_sent_date) {
      toast.success(
        response?.message,
        {
          autoClose: 3000,
          theme: 'colored',
        },
      );
      toast.clearWaitingQueue();
    }
  };

  const downloadInvoice = async (invoiceId) => {
    setLoadingInvoice(true);
    setShowDownloadLoader(invoiceId);

    const response = await api.get(`/invoice/generate/download?invoice_id=${invoiceId}`);
    setLoadingInvoice(false);
    setShowDownloadLoader('');
    if (response.data.data) {
      const a = document.createElement('a');
      const objectUrl = response.data.data.invoiceLink;
      a.href = objectUrl;
      a.target = '_blank';
      a.download = response.data.data.invoice_ref;
      a.click();
      URL.revokeObjectURL(objectUrl);
      toast.success(
        response?.message,
        {
          autoClose: 3000,
          theme: 'colored',
        },
      );
      toast.clearWaitingQueue();
    } else {
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

  const getStatusBtn = (type) => {
    switch (type) {
      case 'DUE':
        return '!text-[#DA1A1A] bg-[#DA1A1A] hover:bg-[#DA1A1A]';
      case 'CANCELLED':
        return '!text-[#DA1A1A] bg-[#DA1A1A] hover:bg-[#DA1A1A]';
      case 'PARTLY_PAID':
        return 'bg-[#CBB916] !text-[#CBB916] hover:bg-[#CBB916]';
      default: return 'bg-green-600 !text-green-600 hover:bg-green-600';
    }
  };

  return (
    <div className="pb-2 md:pb-8 w-full relative min-w-[950px] overflow-x-auto">
      <div className="relative w-full min-h-[60vh] rounded-lg pb-4 pt-[10px] bg-white md:pb-0">
        {
            showLoading && <Loader />
          }
        <div className="w-full px-[15px]">
          <InvoiceTop userCountry={userRegion} setUserCountry={setUserRegion} bookingStatusList={bookingStatus} bookingStatus={selectedBookingStatus} setBookingStatus={setSelectedBookingStatus} selectedDateTime={selectedDateTime} setSelectedDateTime={setSelectedDateTime} searchText={searchText} setSearchText={setSearchText} invoiceMonthList={invoiceMonthList} dateRange={dateRange} setDateRange={setDateRange} />
        </div>
        <div className="grid grid-cols-12 gap-x-2 mt-10">
          <div className="col-span-12 bg-[#F7F7F7] py-3 px-4">
            <div className="col-span-9 text-[#797979] uppercase">
              <div className="grid grid-cols-16 gap-x-4 justify-center items-center text-center px-[15px]">
                <div className="col-span-2">
                  <P className="!font-normal">
                    invoice NUMBER
                  </P>
                </div>
                <div className="col-span-2">
                  <P className="!font-normal">
                    invoice date
                  </P>
                </div>
                <div className="col-span-2">
                  <P className="!font-normal">
                    TIME period
                  </P>
                </div>
                <div className="col-span-2">
                  <P className="!font-normal">
                    gross
                  </P>
                </div>
                <div className="col-span-2">
                  <P className="!font-normal">
                    TOTAL
                  </P>
                </div>
                <div className="col-span-2">
                  <P className="!font-normal">
                    DUE DATE
                  </P>
                </div>
                <div className="col-span-3">
                  <P className="!font-normal">
                    STATUS
                  </P>
                </div>
                <div className="col-span-1">
                  <P className="!font-normal">
                    actions
                  </P>
                </div>
              </div>
            </div>
          </div>
          {
                invoiceData.length > 0 && invoiceData.map((item) => (
                  <div className="col-span-12 py-3 px-4" key={item?.invoice_ref}>
                    <div className="col-span-9 text-black uppercase">
                      <div className="grid grid-cols-16 gap-x-2 justify-center items-center text-center px-[15px] border-b border-[#DEDEDEC4] py-2">
                        <div className="col-span-2">
                          <P>
                            {item?.invoice_ref}
                          </P>
                        </div>
                        <div className="col-span-2">
                          <P>
                            {item?.invoice_issue_date}
                          </P>
                        </div>
                        <div className="col-span-2">
                          <P>
                            {item?.invoice_period}
                          </P>
                        </div>
                        <div className="col-span-2">
                          <P className="!whitespace-pre">
                            {formatPrice(item?.invoice_gross_amt, '' || 'GBP')}
                          </P>
                        </div>
                        <div className="col-span-2">
                          <P className="!whitespace-pre">
                            {formatPrice(item?.invoice_net_amt, '' || 'GBP')}
                          </P>
                        </div>
                        <div className="col-span-2">
                          <P>
                            {(item?.invoice_issue_date)}
                          </P>
                        </div>
                        <div className="col-span-3">
                          {
                            item?.invoice_status === 'PAID'
                            && <P className="!text-xs py-1">{formatDateTime(item?.invoice_paid_date, 'YYYY-MM-DDTHH:mm:ss.sssZ')}</P>
                          }
                          <Button className={`${getStatusBtn(item?.invoice_status)} !text-xs bg-opacity-20 !py-1 !h-auto hover:bg-opacity-30 w-[80%]`}>
                            {item?.invoice_status}
                          </Button>
                        </div>
                        <div className="col-span-1">
                          <div className="flex gap-4 justify-center">
                            <div className="relative h-4 w-4 cursor-pointer flex-none">
                              {
                               showMailLoader === item?.invoice_id && loadingInvoice ? (
                                 <div role="status">
                                   <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                     <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                   </svg>
                                   <span className="sr-only">Loading...</span>
                                 </div>
                               )
                                 : (
                                   <Image
                                     src="/images/icons/email.svg"
                                     className=""
                                     alt="Download"
                                     fill
                                     onClick={() => { sendMail(item?.invoice_id); }}
                                   />
                                 )
                              }
                            </div>
                            <div className="relative h-3 w-3 cursor-pointer flex-none">
                              {
                                showDownloadLoader === item?.invoice_id && loadingInvoice ? (
                                  <div role="status">
                                    <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                  </div>
                                )
                                  : (
                                    <Image
                                      src="/images/icons/invoice-d.svg"
                                      className=""
                                      alt="mail"
                                      fill
                                      onClick={() => { downloadInvoice(item?.invoice_id); }}
                                    />
                                  )
                                }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
          {
              invoiceData.length === 0 && !showLoading && (
                <div className="col-span-12 py-3 px-4">
                  <div className="flex items-center justify-center flex-col min-h-[35vh] my-auto w-full">
                    <div className="w-28 h-28 relative">
                      <Image src="/images/global/empty-box.png" fill alt="empty-box" />
                    </div>
                    <H2>No Data Available</H2>
                  </div>
                </div>
              )
              }
        </div>
      </div>
    </div>
  );
}
