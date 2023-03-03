import { chunk } from "../src/chunk";

test("should split an array into chunks of specified size", () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const chunked = chunk(arr, 2);

  expect(chunked).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
  ]);
});

test("should handle an empty array", () => {
  const arr: number[] = [];
  const chunked = chunk(arr, 3);

  expect(chunked).toEqual([]);
});

test("should handle a size larger than the array length", () => {
  const arr = [1, 2, 3, 4];
  const chunked = chunk(arr, 6);

  expect(chunked).toEqual([[1, 2, 3, 4]]);
});
