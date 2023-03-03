/**
 * Groups an array of objects by a specified key.
 *
 * @param arr The array of objects to be grouped.
 * @param key The key to group the objects by.
 * @returns An object where the keys are the unique values of the specified key
 * and the values are arrays containing the objects with the corresponding key value.
 */

export const groupBy = <T extends object, K extends keyof T>(
  arr: T[],
  key: K
): Record<T[K], T[]> => {
  const ret = {} as Record<T[K], T[]>; // Initialize an empty object to store the grouped objects.

  arr.forEach((item) => {
    const itemKey = item[key]; // Get the value of the specified key from the current object.

    if (!ret[itemKey]) {
      // If the key does not exist in the result object, create an empty array for it.
      ret[itemKey] = [];
    }

    ret[itemKey].push(item); // Push the current object into the corresponding key array.
  });

  return ret; // Return the object with grouped arrays.
};
