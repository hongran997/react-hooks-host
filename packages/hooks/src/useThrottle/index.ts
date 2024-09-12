import type { ThrottleOptions } from '../model/ThrottleOptions';
import useThrottleFn from '../useThrottleFn';
import { useEffect, useState } from 'react';

export default function useThrottle(value: any, options: ThrottleOptions) {
  const [throttled, setThrottled] = useState(value);

  const { run, cancel, flush } = useThrottleFn(() => {
    setThrottled(value);
  }, options);

  useEffect(() => {
    run();
  }, [value]);

  return throttled;
}
