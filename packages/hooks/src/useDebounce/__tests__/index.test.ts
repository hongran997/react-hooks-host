import { act, renderHook } from '@testing-library/react';
import useDebounce from '../index';
import { sleep } from '../../utils/testingHelpers';

describe('useDebounce', () => {
  it('useDebounce wait:200ms', async () => {
    let mountedState = 0;
    const { result, rerender } = renderHook(() => useDebounce(mountedState, { wait: 200 }));
    expect(result.current).toBe(0);
    mountedState = 1;
    rerender();
    await sleep(50);
    expect(result.current).toBe(0);
    mountedState = 2;
    rerender();
    await sleep(100);
    expect(result.current).toBe(0);
    mountedState = 3;
    rerender();
    await act(async () => {
      await sleep(150);
    });
    expect(result.current).toBe(0);
    mountedState = 4;
    rerender();
    // TODO
    // act 是 React 测试库提供的一个工具，用于确保所有的状态更新都被正确处理和应用。
    await act(async () => {
      await sleep(250);
    });
    expect(result.current).toBe(4);
  });
});
