/**
 * Creates a new object by picking specified keys from the original object.
 *
 * @param obj The original object.
 * @param keys The keys to be picked from the object.
 * @returns A new object with only the specified keys.
 */
export const pick = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> => {
  const ret = {} as Pick<T, K>; // Create an empty object with the same type as the picked keys.

  keys.forEach((key) => {
    ret[key] = obj[key]; // Assign the value of each picked key from the original object to the new object.
  });

  return ret; // Return the new object with the picked keys.
};
