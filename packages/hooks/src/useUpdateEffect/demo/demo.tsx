/**
 * title: 基础用法
 * desc: 使用上与 useEffect完全相同，只是它忽略了首次执行， 只在依赖项更新时执行。
 */

import React from 'react';
import { useState, useEffect } from 'react';
import useUpdateEffect from '../index';

export default () => {
  const [count, setCount] = useState(0);
  const [effectCount, setEffectCount] = useState(0);
  const [updateEffectCount, setupdateEffectCount] = useState(0);

  useEffect(() => {
    setEffectCount((effectCount) => effectCount + 1);
  }, [count]);

  useUpdateEffect(() => {
    setupdateEffectCount((updateEffectCount) => updateEffectCount + 1);
  }, [count]);

  return (
    <div>
      <p>count: {count}</p>
      <p>effectCount: {effectCount}</p>
      <p>updateEffectCount: {updateEffectCount}</p>
      <button onClick={() => setCount((count) => count + 1)}>Count+1</button>
    </div>
  );
};
