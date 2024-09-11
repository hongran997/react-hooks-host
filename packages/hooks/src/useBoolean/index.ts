import { useMemo } from 'react';
import useToggle from '../useToggle';

interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  set: (value: boolean) => void;
  toggle: () => void;
}

export default function useBoolean(defaultValue = false): [boolean, Actions] {
  const [state, { toggle, set }] = useToggle(!!defaultValue);

  // useMemo的依赖项为空数组 []
  // 那么 useMemo 内的函数只会在组件的初次渲染时触发一次。
  // 之后，除非组件被卸载和重新挂载，否则这个函数不会再被调用。
  const actions: Actions = useMemo(() => {
    const setTrue = () => set(true);
    const setFalse = () => set(false);
    return { setTrue, setFalse, set: (v) => set(!!v), toggle };
  }, []);

  return [state, actions];
}
