/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import P from 'components/typography/P';
import api from 'components/utils/api';
import formatDateTime from 'components/utils/formatDateTime';
import { useSocket } from 'context/SocketContext';
import { UtilityContext } from 'context/UtilityContext';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function Notification() {
  const { setViewBookingId, setShowViewBooking, setBookingActivity } = useContext(UtilityContext);
  const [notifications, setNotifications] = useState([]);
  const newSocket = useSocket();
  const [socket, setSocket] = useState(null);
  const router = useRouter();
  const pathName = usePathname();
  const pathNameLastPart = pathName.split('/').pop()?.replace('', ' ');

  useEffect(() => {
    if (!socket && newSocket) {
      newSocket?.on('connect', () => {
        console.log('Connected to Socket.io server');
        const user = JSON.parse(sessionStorage.getItem('user'));
        newSocket.emit('subscribe', JSON.stringify({ email: user?.useremailid }));
      });
      setSocket(newSocket);
    }

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [newSocket, socket]);
  useEffect(() => {
    if (newSocket) {
      // Register the event listener here
      newSocket?.on('notification', (notification) => {
        const newNotification = JSON.parse(notification);
        if (newNotification.notification_id && notifications.some((item) => item?.notification_id !== newNotification.notification_id)) {
          // eslint-disable-next-line camelcase
          const { notification_time, ...rest } = newNotification;
          const updatedNotification = {
            // eslint-disable-next-line camelcase
            createdate: notification_time,
            ...rest,
          };
          setNotifications((prevNotifications) => [updatedNotification, ...prevNotifications]);
        }
      });
    }
  }, [newSocket, notifications]);
  useEffect(() => {
    const getNotiFication = async () => {
      const response = await api.get('/notification');
      if (response?.data.length > 0) {
        setNotifications(response?.data);
      } else {
        setNotifications([]);
      }
    };
    getNotiFication();
  }, []);
  const deleteNotification = async (notificationId) => {
    const filterNotification = notifications?.filter((notification) => notification.notification_id !== notificationId);
    setNotifications(filterNotification);
    const response = await api.put(`/notification/${notificationId}`, {});
    if (response?.data?.status !== 1) {
      toast.error('Somthing went wrong!', {
        autoClose: 3000,
        theme: 'colored',
      });
    }
    if (pathNameLastPart !== 'booking-summary') {
      router.push('/corporate/booking/view-booking');
    }
  };
  return (
    <div className="relative w-6 h-6 cursor-pointer dropdown dropdown-end">
      <Image
        src="/images/global/notification.svg"
        fill
        alt="bell"
        tabIndex={0}
      />
      <P className="absolute -top-3.5 -right-3 px-0.5 !text-[10px] font-semibold bg-primary min-w-[1.5rem] min-h-[1.6rem] rounded-full w-auto h-auto text-white flex items-center justify-center">{notifications.length}</P>
      <div tabIndex={0} className="dropdown-content z-[1] menu !flex-row p-2 shadow bg-white sm:min-w-[20rem] min-w-[17rem] top-6 rounded-sm px-0 py-0 max-h-[300px] overflow-x-hidden overflow-y-auto sm:!right-0 !right-[-85px]">
        {notifications.length > 0
          ? (
            notifications.map((notification) => (
              <div className="py-3 border-b relative w-full" key={notification?.notification_id} onClick={() => { setViewBookingId(notification?.booking_id); setShowViewBooking(true); setBookingActivity(0); deleteNotification(notification?.notification_id); }}>
                <div className="flex gap-x-4 items-center px-2">
                  <div className="bg-gray-100 h-[3rem] w-[3rem] text-gray-400 flex items-center justify-center rounded-full flex-none uppercase">
                    {notification?.booker_name.split('')[0]}
                    {notification?.booker_name.split('')[1]}
                  </div>
                  <div>
                    <P className="pr-5 pt-3 text-black">{notification?.notification}</P>
                    <P className="mt-2 flex-none">{formatDateTime(notification?.createdate, 'YYYY-MM-DDTHH:mm:ss.sssZ')}</P>
                  </div>
                </div>
                <button type="button" className="absolute top-3 -translate-y-2/4 right-2 text-primary"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" /></svg></button>
              </div>
            ))
          )
          : <P>No notifiction</P>}
      </div>
    </div>
  );
}
