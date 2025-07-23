// utils.ts

// fn transformUrl —— converts title to url
export function transformUrl(title: string) {
  return title.split(" ").join("-").toLowerCase();
}

export function throttle<T extends unknown[]>(
  fn: (...args: T) => void,
  wait: number
): (...args: T) => void {
  let lastTime = 0;
  return function (this: unknown, ...args: T) {
    const now = Date.now();
    if (now - lastTime >= wait) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}
