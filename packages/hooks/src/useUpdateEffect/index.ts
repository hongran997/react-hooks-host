import { useRef, useEffect, EffectCallback, DependencyList } from 'react';

const useUpdateEffect = function (effect: EffectCallback, deps: DependencyList): void {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    return effect();
  }, deps);
};

export default useUpdateEffect;
