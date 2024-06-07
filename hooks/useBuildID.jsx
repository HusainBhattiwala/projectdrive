import { useState } from 'react';
import useSWR from 'swr';

const useBuildID = () => {
  const [buildId, setBuildId] = useState(null);

  // console.log('buildId', buildId);

  const { error } = useSWR(
    '/api/build-id',
    async (url) => {
      // console.log('url', url);
      const responseStrm = await fetch(url);
      const response = await responseStrm.json();
      // console.log('response', response);
      setBuildId(response?.buildId);
    },
    {
      shouldRetryOnError: false,
      refreshInterval: 60000,
    },
  );
  return buildId;
};

export default useBuildID;
