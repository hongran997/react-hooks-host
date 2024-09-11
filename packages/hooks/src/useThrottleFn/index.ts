import { useMemo } from 'react';
import type { ThrottleOptions } from '../model/ThrottleOptions';
import isDev from '../utils/isDev';
import { isFunction } from '../utils';
import { throttle } from 'lodash-es';
import useLatest from '../useLatest';
import useUnmount from '../useUnmount';

type noop = (...args: any[]) => any;

function useThrottleFn<T extends noop>(fn: T, options: ThrottleOptions) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useThrottleFn expected parameter is a function, got ${typeof fn}`);
    }
  }

  const fnRef = useLatest(fn);

  const wait = options?.wait ?? 1000;

  const throttled = useMemo(
    // throttle 外面不能加{}, 否则需要加上{return throttle(..., wait, options)}
    // 这里不能省略箭头函数, 否则不会返回正确的值
    () =>
      throttle(
        (...args: Parameters<T>): ReturnType<T> => {
          return fnRef.current(...args);
        },
        wait,
        options,
      ),
    [],
  );

  useUnmount(() => {
    throttled.cancel();
  });

  return {
    run: throttled,
    cancel: throttled.cancel,
    flush: throttled.flush,
  };
}
export default useThrottleFn;
