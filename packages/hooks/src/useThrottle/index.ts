import { useEffect, useState, useRef } from 'react';

export default function useThrottle(value: any, wait: number = 1000) {
  const [throttled, setThrottled] = useState(value);
  let lastTime = useRef(0);
  const timeoutRef = useRef();

  useEffect(() => {
    const now = Date.now();
    if (now - lastTime.current >= wait) {
      lastTime.current = now;
      setThrottled(value);
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        lastTime.current = Date.now();
        setThrottled(value);
      }, wait);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, wait]);

  return throttled;
}
