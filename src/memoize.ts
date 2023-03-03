/**
 * Memoizes the result of a function based on its arguments.
 *
 * @param fn The function to be memoized.
 * @returns A memoized version of the function.
 */
export const memoize = <T extends (...args: any[]) => any>(fn: T): T => {
  const cache = new Map<string, ReturnType<T>>(); // Initialize a cache to store memoized results.

  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args); // Generate a unique key based on the function arguments.

    if (cache.has(key)) {
      // If the result for the key exists in the cache, return it.
      return cache.get(key)!;
    }

    const result = fn(...args); // Invoke the original function with the provided arguments.
    cache.set(key, result); // Cache the result for future invocations.
    return result; // Return the result.
  }) as T; // Cast the returned function to the original function type.
};
