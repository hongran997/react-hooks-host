import { useEffect, useRef } from 'react';

function useUnmount(fn) {
  const fnRef = useRef(fn);

  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  // 第一种写法
  // useEffect(
  //   () => () => {
  //     fnRef.current();
  //   },
  //   [],
  // );

  // 第二种写法
  useEffect(() => {
    return () => {
      fnRef.current();
    };
  }, []);

  /**
   * 这两种写法都是等同的，都是在组件卸载时执行 fnRef.current() 函数。
   */
}

export default useUnmount;
