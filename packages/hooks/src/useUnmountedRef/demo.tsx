import useUnmountedRef from './index';
import React, { useEffect, useState } from 'react';
import { message } from 'antd';

function MyComponent() {
  const unmountedRef = useUnmountedRef();

  /**
   * 父组件的渲染函数和 useEffect 先于子组件执行。
   * 同级组件之间，按照在代码中的顺序依次执行。
   * 同一组件内的多个 useEffect 按照在代码中的顺序依次执行。
   */
  useEffect(() => {
    let timer = setTimeout(() => {
      if (!unmountedRef.currect) {
        message.info('component is alive');
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <p>hello world</p>;
}

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
