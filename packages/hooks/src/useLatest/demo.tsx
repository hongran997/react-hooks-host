/**
 * title: 基础用法
 * desc: useLatest 返回的永远都是最新值
 */

import React, { useState, useEffect } from 'react';
import useLatest from './index';

export default () => {
  const [count, setCount] = useState(0);

  const latestCountRef = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(latestCountRef.current + 1);
      // setCount((count) => count + 1);
      // setCount(count + 1); // 这里会报错，因为 count 是闭包变量
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>count: {count}</p>
    </>
  );
};
