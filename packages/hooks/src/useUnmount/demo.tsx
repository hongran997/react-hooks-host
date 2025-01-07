/**
 * title: 基础用法
 * desc: 在组件卸载时，执行函数。
 */

import React, { useState } from 'react';
import useUnmount from './index';
import { message } from 'antd';

const MyComponent = () => {
  useUnmount(() => {
    message.info('unmount');
  });

  return <p>Hello World!</p>;
};

export default () => {
  const [state, setState] = useState(true);

  return (
    <>
      <button type="button" onClick={() => setState((prev) => !prev)}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  );
};
