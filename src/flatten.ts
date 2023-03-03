/**
 * Flattens a nested array into a single-level array.
 *
 * @param arr The nested array to be flattened.
 * @returns A new array with all elements flattened.
 */

export const flatten = <T>(arr: T[][]): T[] => {
  return arr.reduce((acc, item) => {
    return acc.concat(item);
  }, [] as T[]);
};
