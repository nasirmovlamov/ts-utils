/**
 * Creates a new object by omitting specified keys from the original object.
 *
 * @param obj The original object.
 * @param keys The keys to be omitted from the object.
 * @returns A new object without the specified keys.
 */

type Obj = Record<string, any>;

export const omit = <T extends Obj, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> => {
  const result = { ...obj }; // Create a shallow copy of the original object.

  keys.forEach((key) => {
    delete result[key]; // Delete each specified key from the copied object.
  });

  return result; // Return the modified object without the omitted keys.
};
