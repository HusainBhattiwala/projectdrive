import { useState, useEffect } from 'react';

const useDimension = (nodeRef) => {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
    scrollHeight: 0,
    scrollWidth: 0,
    scrollLeft: 0,
  });

  useEffect(() => {
    const calculateDims = () => {
      const node = nodeRef.current;
      if (node) {
        setDimensions({
          height: node.offsetHeight,
          width: node.offsetWidth,
          scrollHeight: node.scrollHeight,
          scrollWidth: node.scrollWidth,
          scrollLeft: node.scrollLeft,
        });
      }
    };

    const config = { attributes: true, childList: true, subtree: true };
    const resizeObserver = new ResizeObserver(calculateDims);
    const observer = new MutationObserver(calculateDims);
    const node = nodeRef.current;
    resizeObserver.observe(node);
    observer.observe(node, config);

    return () => {
      if (node) {
        resizeObserver.unobserve(node);
        observer.disconnect();
      }
    };
  }, [nodeRef]);

  return dimensions;
};

export default useDimension;
