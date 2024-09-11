/**
 * title: 基础用法
 * desc: DebouncedValue 只会在输入结束500ms后变化
 */
import React, { useState } from 'React';
import useDebounce from '../index';

export default () => {
  const [value, setValue] = useState<string>();
  const debouncedValue = useDebounce(value, { wait: 500 });

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
