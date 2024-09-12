/**
 * title: 基础用法
 * desc: ThrottledValue 每隔2000ms 变化一次
 */

import React, { useState } from 'react';
import useThrottle from '../index';
export default () => {
  // TODO
  const [value, setValue] = useState('');

  const throttledValue = useThrottle(value, { wait: 2000 });

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typed Value"
        style={{ width: '280' }}
      />
      <p>throttledValue: {throttledValue}</p>
    </div>
  );
};
