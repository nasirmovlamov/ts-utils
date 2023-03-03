/**
 * Creates a throttled version of the provided callback function.
 *
 * @param callback The callback function to be throttled.
 * @param delay The minimum delay in milliseconds between invocations of the callback.
 * @returns A throttled version of the callback function.
 */
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
      // If there is a pending timeout, do not invoke the callback.
      return;
    }

    timeoutId = setTimeout(() => {
      // After the delay, invoke the callback with the last captured arguments and context.
      callback.apply(lastThis, lastArgs);
      timeoutId = null;
    }, delay);
  }) as T;
};
