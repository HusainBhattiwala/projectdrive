const URL = 'https://www.roldrive.com';

const urls = [
  { priority: '1.00', route: '' },
  { priority: '0.9', route: 'fleet' },
  { priority: '0.9', route: 'login' },
  { priority: '0.9', route: 'airport-transfers' },
  { priority: '0.9', route: 'road-shows' },
  { priority: '0.9', route: 'intercity-rides' },
  { priority: '0.9', route: 'airport-transfer-heathrow' },
  { priority: '0.9', route: 'airport-transfer-gatwick' },
  { priority: '0.9', route: 'airport-transfer-london-city' },
  { priority: '0.9', route: 'airport-london-southend' },
  { priority: '0.9', route: 'airport-london-stansted' },
  { priority: '0.9', route: 'airport-transfer-luton' },
  { priority: '0.9', route: 'airport-transfer-london' },
  { priority: '0.9', route: 'airport-transfer-paris' },
  { priority: '0.9', route: 'airport-transfer-new-york' },
  { priority: '0.9', route: 'airport-transfer-dubai' },
  { priority: '0.9', route: 'full-day-chauffeur-hire' },
  { priority: '0.9', route: 'hourly-chauffeur-service' },
  { priority: '0.9', route: 'chauffeur-service-in-london' },
  { priority: '0.9', route: 'event-chauffeur-service-in-london' },
  { priority: '0.9', route: 'long-distance-chauffeur-service-in-london' },
  { priority: '0.9', route: 'mercedes-sprinter-hire-in-london' },
  { priority: '0.9', route: 'mercedes-s-class-chauffeur-in-london' },
  { priority: '0.9', route: 'mercedes-v-class-london' },
  { priority: '0.9', route: 'luxury-chauffeur-service-mayfair' },
  { priority: '0.9', route: 'corporate-chauffeur-service-london' },
  { priority: '0.9', route: 'executive-chauffeur-service-london' },
  { priority: '0.9', route: 'chauffeur-driven-car-hire-london' },
  { priority: '0.9', route: 'luxury-taxi-service-london' },
  { priority: '0.9', route: 'contact-us' },
  { priority: '0.7', route: 'terms-and-conditions' },
  { priority: '0.7', route: 'privacy-policy' },
  { priority: '0.7', route: 'gdpr-policy' },
  { priority: '0.7', route: 'become-a-supplier' },
  { priority: '0.7', route: 'faqs' },
];

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
     ${urls
    .map(
      (item) => `
           <url>
               <loc>${`${URL}/${item.route}`}</loc>
               <lastmod>2023-06-19T08:23:56+00:00</lastmod>
               <changefreq>weekly</changefreq>
               <priority>${item.priority}</priority>
           </url>
         `,
    )
    .join('')}
   </urlset>
 `;
}

export function GET() {
  const body = generateSiteMap();

  return new Response(body, {
    status: 200,
    headers: {
      'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
      'content-type': 'application/xml',
    },
  });
}
