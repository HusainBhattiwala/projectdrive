export const metadata = ({
  title,
  description,
  keywords,
  url,
  ogTitle,
  ogDescription,
  ogImage,
  twTitle,
  twDescription,
  siteId,
}) => ({
  title,
  description,
  keywords,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: url,
  },
  verification: {
    google: 'google1408fd1810453fe2',
  },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url,
    siteName: 'RolDrive',
    images: [
      {
        url:
          ogImage || 'https://www.roldrive.com/images/booking/booking_bg.png',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: twTitle,
    description: twDescription,
    siteId: siteId || 'https://twitter.com/Rol_Drive',
    creator: '@Rol_Drive',
    creatorId: '1467726470533754880',
    // images: ['https://www.roldrive.com/images/booking/booking_bg.png'],
  },
});
