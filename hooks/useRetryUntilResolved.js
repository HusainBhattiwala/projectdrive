import { useState } from 'react';
import useInterval from './useInterval';

function useRetryUntilResolved(callback, interval = 100) {
  const [hasResolved, setHasResolved] = useState(false);
  useInterval(
    () => {
      const result = callback();
      if (result) {
        setHasResolved(true);
      }
    },
    hasResolved ? undefined : interval,
  );
  return hasResolved;
}
export default useRetryUntilResolved;
