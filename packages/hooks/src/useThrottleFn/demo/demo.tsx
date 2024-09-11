/**
 * title: 基础用法
 * description: 频繁调用函数，但只会每隔1000ms执行一次相关函数
 */

import React, { useState } from 'react';
import useThrottleFn from '../index';

export default () => {
  const [count, setCount] = useState(0);
  const { run } = useThrottleFn(
    () => {
      setCount(count + 1);
    },
    { wait: 1000 },
  );
  return (
    <div>
      <p>Clicked count: {count}</p>
      <button onClick={run}>Click fast!</button>
    </div>
  );
};
