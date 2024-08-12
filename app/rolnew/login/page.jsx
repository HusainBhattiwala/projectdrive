import metadataConfig from 'rolnew/meta/metadataConfig';
import MetaTags from 'rolnew/meta/MetaTags';
import FullPage from './FullPage';

const metadata = metadataConfig.login;

export default function Page() {
  return (
    <>
      <MetaTags metadata={metadata} />
      <FullPage />
    </>
  );
}
