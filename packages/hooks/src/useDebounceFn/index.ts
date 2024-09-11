// 使用 import type 可以优化编译后的代码大小。
import type { DebounceOptions } from '../model/DebounceOptions';
import isDev from '../utils/isDev';
import useUnmount from '../useUnmount';
import useLatest from '../useLatest';
import { isFunction } from '../utils';
import { useMemo } from 'react';
import { debounce } from '../utils/lodash-polyfill';

type noop = (...args: any[]) => any;

// useDebounceFn1 是一个普通函数，参数类型固定为 noop。
// useDebounceFn2 是一个泛型函数，参数类型可以是 noop 的任何子类型，更加灵活。
function useDebounceFn<T extends noop>(fn: T, options: DebounceOptions) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useDebounceFn expected parameter is a function, got ${typeof fn}`);
    }
  }

  const fnRef = useLatest(fn);

  // ?? 是空值合并运算符（Nullish Coalescing Operator）。
  // 它的作用是当左侧操作数为 null 或 undefined 时，返回右侧操作数；
  // 否则，返回左侧操作数。
  const wait = options?.wait ?? 1000;
  // 这与使用 || 运算符的区别在于，|| 会在左侧操作数为任何假值（如 0、''、false 等）时返回右侧操作数。

  const debounced = useMemo(
    () =>
      debounce(
        (...args: Parameters<T>): ReturnType<T> => {
          return fnRef.current(...args);
        },
        wait,
        options,
      ),
    [],
  );

  useUnmount(() => {
    debounced.cancel();
  });

  return { run: debounced, cancel: debounced.cancel, flush: debounced.flush };
}
export default useDebounceFn;
