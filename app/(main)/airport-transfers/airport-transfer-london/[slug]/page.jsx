import AirportPage from 'rolnew/section/airports/london/AirportPage';
import MetaTags from 'rolnew/meta/MetaTags';
import metadataConfig from 'rolnew/meta/metadataConfig';

const airports = [
  {
    name: 'heathrow',
    value: 'airport-transfer-heathrow',
    meta: 'heathrowTransfer',
  },
  {
    name: 'gatwick',
    value: 'airport-transfer-gatwick',
    meta: 'gatwickTransfer',
  },
  {
    name: 'londoncity',
    value: 'airport-transfer-london-city',
    meta: 'londonCityTransfer',
  },
  {
    name: 'londonsouthend',
    value: 'airport-transfer-london-southend',
    meta: 'southendTransfer',
  },
  {
    name: 'londonstansted',
    value: 'airport-transfer-london-stansted',
    meta: 'stanstedTransfer',
  },
  { name: 'luton', value: 'airport-transfer-luton', meta: 'lutonTransfer' },
];

export function generateMetadataAirport({ params }) {
  const { slug } = params; // Access the slug parameter
  const airport = airports.find((airport) => airport.value === slug); // Match the slug with the airport value

  if (!airport) return {};

  const metadata = metadataConfig[airport.meta];
  return metadata || {};
}

export default function Page({ params }) {
  const metadata = generateMetadataAirport({ params });

  return (
    <>
      <MetaTags metadata={metadata} />
      <AirportPage />
    </>
  );
}
