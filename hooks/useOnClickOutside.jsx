import { useEffect } from 'react';

function useOnClickOutside(refs, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (refs) {
        if (refs.length > 0) {
          let shouldReturn;
          refs.forEach((eachRef) => {
            if (eachRef.current?.contains(event.target)) {
              shouldReturn = true;
            }
          });
          if (shouldReturn) return;
        } else if (!refs.current || refs.current.contains(event.target)) {
          return;
        }
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handler]);
}
export default useOnClickOutside;
