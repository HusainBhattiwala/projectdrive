import { useEffect } from 'react';
import useBuildID from './useBuildID';
import usePrevious from './usePrevious';

export default function useReloadOnNewBuild() {
  const buildId = useBuildID();
  const prevBuildId = usePrevious(buildId);

  // console.log('buildId reload hook', buildId);
  // console.log('prevBuildId', prevBuildId);

  useEffect(() => {
    if (prevBuildId && buildId && prevBuildId !== buildId) {
      console.log('Build ID Changed - Reloading Now');
      document.location.reload();
    }
  }, [buildId, prevBuildId]);

  return null;
}
