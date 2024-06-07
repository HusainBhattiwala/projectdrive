'use client';

import { useRouter } from 'next/navigation';
import React, { createContext, useEffect, useState } from 'react';

export const UtilityContext = createContext();

const formatPrice = (price, currency = 'GBP') => {
  if (price) {
    const formatter = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency,
    });

    const formattedPrice = formatter.format(price);
    const spaceSeparatedPrice = formattedPrice.replace(/(\D)(\d)/, '$1 $2');

    return spaceSeparatedPrice;
  }
  return '';
};

const eclipseText = (text, maxLength = 30) => {
  if (text && text.length === 0) return text;
  if (text && text.length <= maxLength) return text;
  if (text && text.length > maxLength) {
    return `${text.slice(0, maxLength)}...`;
  }
  return text;
};
const renderWithNewlines = (text) => {
  const lines = text.split('\n');
  return lines.map((line, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

function getTime(date) {
  const newDate = new Date(date);
  return `${newDate.getHours().toString().padStart(2, '0')}:${newDate.getMinutes().toString().padStart(2, '0')}`;
}

function getDate(date) {
  if (!date) return '';
  const newDate = new Date(date);
  return `${newDate.getDate().toString().padStart(2, '0')}.${(newDate.getMonth() + 1).toString().padStart(2, '0')}.${newDate.getFullYear().toString()}`;
}

export function UtilityProvider({ children }) {
  const router = useRouter();
  const [pageName, setPageName] = useState('');
  const [showNewBooking, setShowNewBooking] = useState(false);
  const [showViewBooking, setShowViewBooking] = useState(false);
  const [viewBookingId, setViewBookingId] = useState('');
  const [activeTabIndex, setBookingActivity] = useState(1);
  useEffect(() => {
    setPageName();
  }, [setPageName, router]);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UtilityContext.Provider value={{
      formatPrice,
      setPageName,
      eclipseText,
      renderWithNewlines,
      pageName,
      getTime,
      getDate,
      showNewBooking,
      setShowNewBooking,
      showViewBooking,
      setShowViewBooking,
      viewBookingId,
      setViewBookingId,
      activeTabIndex,
      setBookingActivity,
    }}
    >
      {children}
    </UtilityContext.Provider>
  );
}
