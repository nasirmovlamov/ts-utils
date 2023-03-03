/**
 * Splits an array into chunks of the specified size.
 *
 * @param arr The array to be chunked.
 * @param size The size of each chunk.
 * @returns An array of chunks.
 */

export const chunk = <T>(arr: T[], size: number): T[][] => {
  const ret = [] as T[][]; // Initialize an empty array to store the chunks.

  // Iterate over the original array in chunks of the specified size.
  for (let i = 0; i < arr.length; i += size) {
    // Slice the original array from the current index to the current index + size.
    // Push the sliced chunk to the result array.
    ret.push(arr.slice(i, i + size));
  }

  return ret; // Return the array of chunks.
};
