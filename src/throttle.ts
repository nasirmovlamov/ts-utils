export const throttle = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T => {
  let timeoutId: ReturnType<typeof setTimeout> | null;
  let lastArgs: any[];
  let lastThis: any;

  return ((...args: any[]) => {
    lastArgs = args;
    lastThis = this;

    if (timeoutId) {
      return;
    }

    timeoutId = setTimeout(() => {
      callback.apply(lastThis, lastArgs);
      timeoutId = null;
    }, delay);
  }) as T;
};
