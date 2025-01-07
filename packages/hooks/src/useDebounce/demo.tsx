/**
 * title: 基础用法
 * desc: DebouncedValue 只会在输入结束1000ms后变化
 */
import React, { useState } from 'react';
import useDebounce from './index';

export default () => {
  const [value, setValue] = useState<string>();

  const debouncedValue = useDebounce(value, 1000);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typed Value"
        style={{ width: '280' }}
      />
      <p style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</p>
    </div>
  );
};
