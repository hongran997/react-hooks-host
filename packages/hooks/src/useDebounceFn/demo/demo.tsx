/**
 * title: 基础用法
 * desc: 频繁调用run, 但只会在所有点击完成500ms 后执行一次相关函数
 */
import React, { useState } from 'react';
import useDebounceFn from '../index';

export default () => {
  const [value, setValue] = useState<string>(0);
  const { run, cancel, flush } = useDebounceFn(
    () => {
      setValue((count) => count + 1);
    },
    { wait: 500 },
  );

  return (
    <div>
      <p>Clicked count: {value}</p>

      <button type="button" onClick={run}>
        Click fast!
      </button>
    </div>
  );
};
