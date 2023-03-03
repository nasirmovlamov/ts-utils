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
