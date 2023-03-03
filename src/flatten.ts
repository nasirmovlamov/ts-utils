export const flatten = <T>(arr: T[][]): T[] => {
  return arr.reduce((acc, item) => {
    return acc.concat(item);
  }, [] as T[]);
};
