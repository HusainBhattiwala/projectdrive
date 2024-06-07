'use client';

import React, { useEffect, useState } from 'react';

function CountUp({ start, end, duration }) {
  const [count, setCount] = useState(start);
  const step = Math.ceil((end - start) / (duration * 60)); // Calculate the step size

  useEffect(() => {
    if (count < end) {
      const timer = setTimeout(() => {
        setCount(count + step); // Increment count by step
      }, 1000 / 60); // 60 frames per second

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [count, end, step]);

  return <span>{count}</span>;
}

export default CountUp;
