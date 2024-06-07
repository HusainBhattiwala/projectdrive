function gtagReportConversion(eventName) {
  // eslint-disable-next-line no-undef
  gtag('event', eventName, {
    send_to: `${process.env.NEXT_PUBLIC_GA_TRACKING_ID}/96Y7CMqetsUYEPnIjoAq`,
    event_callback: () => console.log('event tracked for', eventName),
  });
  return false;
}

export default gtagReportConversion;
