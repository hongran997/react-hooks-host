import { act, renderHook } from '@testing-library/react';
import { sleep } from '../../utils/testingHelpers';
import useThrottleFn from '../index';

interface ParamsObj {
  fn: (...args: any[]) => any;
  wait?: number;
  deps?: any[];
}

const setUp = ({ fn, wait }: ParamsObj) => renderHook(() => useThrottleFn(fn, { wait }));

let hook;

describe('useThrottleFn', () => {
  it('run, cancel and flush should work', async () => {
    let count = 0;
    const throttleFn = (gap: number) => {
      count += gap;
    };
    act(() => {
      hook = setUp({
        fn: throttleFn,
        wait: 500,
      });
    });
    await act(async () => {
      // TODO
      hook.result.current.run(1); // first time works
      expect(count).toBe(1);
      hook.result.current.run(1); // not works
      hook.result.current.run(1); // not works
      hook.result.current.run(1); // not works
      expect(count).toBe(1);
      await sleep(450); // t:450
      hook.result.current.run(2); // not works
      expect(count).toBe(1);
      await sleep(100); // t: 550
      hook.result.current.run(2); // second time works
      expect(count).toBe(3);
      hook.result.current.run(3); // not works
      hook.result.current.run(3); // not works
      await sleep(500); // t:1050  
      expect(count).toBe(6);
      hook.result.current.run(1); // not works
      hook.result.current.run(4); // not works
      hook.result.current.cancel();  // cancel works
      await sleep(500); // t: 1550
      expect(count).toBe(7);
      hook.result.current.run(1);
      hook.result.current.run(1);
      expect(count).toBe(8);
      hook.result.current.flush();
      expect(count).toBe(9);
      await sleep(550); // t: 2100
      expect(count).toBe(9);
    });
  });
});
