import { useMemo, useState } from 'react';

interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}

export default function useBoolean(defaultValue = false): [boolean, Actions] {
  const [state, setState] = useState(defaultValue);

  // useMemo的依赖项为空数组 []
  // 那么 useMemo 内的函数只会在组件的初次渲染时触发一次。
  // 之后，除非组件被卸载和重新挂载，否则这个函数不会再被调用。
  const actions: Actions = useMemo(() => {
    const setTrue = () => setState(true);
    const setFalse = () => setState(false);
    const toggle = () => setState((prev) => !prev);
    return { setTrue, setFalse, toggle };
  }, []);

  return [state, actions];
}
