export function sleep(time: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

export function request(req) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (req === 0) {
        reject(new Error('req is 0'));
      } else {
        resolve('success');
      }
    }, 1000);
  });
}
