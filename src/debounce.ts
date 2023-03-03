/**
 * Creates a debounced version of the provided callback function.
 *
 * @param callback The callback function to be debounced.
 * @param delay The delay in milliseconds before invoking the callback.
 * @returns A debounced version of the callback function.
 */

export const debounce = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): T => {
  let timeoutId: ReturnType<typeof setTimeout> | null;

  return ((...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callback(...args);
      timeoutId = null;
    }, delay);
  }) as T;
};
