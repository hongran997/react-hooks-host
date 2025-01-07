import { useEffect, useRef } from 'react';

const useUnmountedRef = function () {
  const unmountedRef = useRef(false);

  useEffect(() => {
    // 有必要，应对组件 “多次挂载卸载” 的情况
    unmountedRef.current = false;
    return () => {
      unmountedRef.current = true;
    };
  }, []);

  return unmountedRef;
};
export default useUnmountedRef;
