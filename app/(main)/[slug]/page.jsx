import CityPage from 'rolnew/section/cities/CityPage';
import MetaTags from 'rolnew/meta/MetaTags';
import metadataConfig from 'rolnew/meta/metadataConfig';

const cities = [
  {
    name: 'london',
    value: 'chauffeur-service-in-london',
    meta: 'londonChauffeur',
  },
  {
    name: 'dubai',
    value: 'chauffeur-service-in-dubai',
    meta: 'dubaiChauffeur',
  },
  {
    name: 'newyork',
    value: 'chauffeur-service-in-new-york',
    meta: 'newYorkChauffeur',
  },
  {
    name: 'paris',
    value: 'chauffeur-service-in-paris',
    meta: 'parisChauffeur',
  },
  {
    name: 'tokyo',
    value: 'chauffeur-service-in-tokyo',
    meta: 'tokyoChauffeur',
  },
];

// This function gets metadata based on the dynamic slug
export function generateMetadataCity(params) {
  const { slug } = params; // Access the slug parameter
  const city = cities.find((c) => c.value === slug); // Match the slug with the city value

  if (!city) return {};

  const metadata = metadataConfig[city.meta];
  console.log(metadata);
  return metadata || {};
}

export default function Cities({ params }) {
  const metadata = generateMetadataCity(params); // Pass params directly

  return (
    <>
      <MetaTags metadata={metadata} />
      <CityPage />
    </>
  );
}
