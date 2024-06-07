'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import api from 'components/utils/api';
import BookingDetails from 'components/corporate/FinishedBookingManagement/BookingDetails';
import Activity from 'app/(auth)/trip-details/Activity';
import Loader from 'components/shared/Loader';
import TabsUi from 'app/(auth)/trip-details/TabsUi';
import MapDirection from 'components/corporate/Booking/MapDirection';
import RideRef from 'components/corporate/BookingManagement/RideRef';
import Button from 'components/ui/Button';
import P from 'components/typography/P';
import { UtilityContext } from 'context/UtilityContext';
import formatDateTime from 'components/utils/formatDateTime';

function FullPage() {
  const { formatPrice } = useContext(UtilityContext);
  const location = useRouter();
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('booking_id');
  const [allTripDetails, setAllTripDetails] = useState(null);
  const [bookingActivity, setBookingActivity] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [viaLocations, setViaLocations] = useState([]);

  useEffect(() => {
    if (!bookingId) return;
    const fetchTripDetails = async () => {
      const tripDetailsResponse = await api.get(`/corporate/booking/${bookingId}`);
      const activity = await api.get(
        `/booking/activity?booking_id=${bookingId}`,
      );
      setBookingActivity(activity?.data);
      const tripDetails = tripDetailsResponse?.data;
      // Set origin
      const pickUpcoordinates = tripDetails?.pickup_loc_coord?.match(/-?\d+\.\d+/g);
      const reversedCoordinatesPickUp = `${pickUpcoordinates[1]},${pickUpcoordinates[0]}`;
      setOrigin(reversedCoordinatesPickUp);
      // Set destination
      if (tripDetails?.drop_loc_coord) {
        const dropCoordinates = tripDetails?.drop_loc_coord?.match(/-?\d+\.\d+/g);
        const reversedCoordinatesDrop = `${dropCoordinates[1]},${dropCoordinates[0]}`;
        setDestination(reversedCoordinatesDrop);
      }
      // Set Via
      if (tripDetails?.booking_via.length > 0) {
        const wayPoints = tripDetails?.booking_via.map((via) => {
          const viaCoordinates = via?.via_loc_coord.match(/-?\d+\.\d+/g);
          const reversedCoordinatesVia = `${viaCoordinates[1]},${viaCoordinates[0]}`;
          return {
            latLng: reversedCoordinatesVia,
          };
        });
        setViaLocations(wayPoints);
      }
      setAllTripDetails(tripDetails);
      setIsLoaded(true);
    };
    fetchTripDetails();
  }, [bookingId]);

  console.log(allTripDetails);
  console.log(bookingActivity);

  return (
    <div className="grid lg:grid-cols-5 grid-cols-1 mx-auto gap-x-3 pb-10">
      {
        isLoaded
          ? (
            <>
              <div className="lg:col-span-3 col-span-5">
                <TabsUi activeTab={activeTab} onChange={setActiveTab} />
              </div>
              <div className="lg:col-span-3 col-span-5">
                <RideRef tripDetails={allTripDetails} />
              </div>
              <BookingDetails tripDetails={allTripDetails} />
              <div className="lg:col-span-2 col-span-5 -mt-20">
                {
                  activeTab === 1
                    ? <Activity activity={bookingActivity} />
                    : (
                      <>
                        <div className="h-80">
                          <MapDirection
                            origin={origin}
                            destination={destination}
                            viaLocations={viaLocations}
                          />
                        </div>
                        <div className="px-2 py-4 bg-white mt-3 rounded-md flex justify-between sm:flex-row flex-col items-center">
                          <div className="sm:w-2/4 w-full flex items-center justify-center gap-x-1">
                            <P className="!text-[#797979] font-medium">PAY</P>
                            <P className="text-primary font-semibold !text-base">{ formatPrice(allTripDetails?.tariff)}</P>
                          </div>
                          <div className="w-3/4 flex items-center justify-center gap-x-1">
                            {
                              allTripDetails?.client_payment_date ? (
                                <>
                                  <P className="!text-[#797979] font-medium">STATUS</P>
                                  <div className="bg-[#1FAC392B] whitespace-pre py-1 px-1 rounded-sm">
                                    <P className="!text-[#1FAC39] font-medium">
                                      PAID on
                                      {' '}
                                      {formatDateTime(allTripDetails?.client_payment_date, 'YYYY-MM-DDTHH:mm:ss.sssZ')}
                                    </P>
                                  </div>
                                </>
                              )
                                : (
                                  <>
                                    <P className="!text-[#797979] font-medium">STATUS</P>
                                    <div className="bg-[#ac1f1f2b] whitespace-pre py-1 px-1 rounded-sm w-full text-center">
                                      <P className="!text-[#ac1f1f] font-medium">
                                        No Paid
                                      </P>
                                    </div>
                                  </>
                                )
                            }
                          </div>
                        </div>
                      </>
                    )
                }
              </div>
            </>
          )
          : <Loader />
      }
      <div className="col-span-5 justify-end flex">
        <Button className="btn btn-primary uppercase !h-10 !text-xs px-8 sm:w-auto w-full my-10" onClick={() => { location.back(); }}>Go Back</Button>
      </div>
    </div>
  );
}

export default FullPage;
