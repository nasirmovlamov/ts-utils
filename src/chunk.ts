export const chunk = <T>(arr: T[], size: number): T[][] => {
  const ret = [] as T[][];
  for (let i = 0; i < arr.length; i += size) {
    ret.push(arr.slice(i, i + size));
  }
  return ret;
};
