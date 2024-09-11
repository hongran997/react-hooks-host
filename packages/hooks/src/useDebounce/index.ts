import { useEffect, useState } from 'react';
import type { DebounceOptions } from '../model/DebounceOptions';
import useDebounceFn from '../useDebounceFn';

function useDebounce<T>(value: T, options: DebounceOptions) {
  const [debounce, setDebounced] = useState(value);

  const { run, cancel, flush } = useDebounceFn(() => {
    setDebounced(value);
  }, options);

  useEffect(() => {
    run();
  }, [value]);

  return debounce;
}
export default useDebounce;
