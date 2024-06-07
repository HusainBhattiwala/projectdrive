import { useState, useEffect } from 'react';

const usePageTop = () => {
  const [reachedTop, setReachedTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop } = document.documentElement;

      const hasReachedTop = scrollTop <= 10;

      setReachedTop(hasReachedTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return reachedTop;
};

export default usePageTop;
