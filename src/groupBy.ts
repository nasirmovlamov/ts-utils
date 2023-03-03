export const groupBy = <T extends object, K extends keyof T>(
  arr: T[],
  key: K
): Record<T[K], T[]> => {
  const ret = {} as Record<T[K], T[]>;
  arr.forEach((item) => {
    const itemKey = item[key];
    if (!ret[itemKey]) {
      ret[itemKey] = [];
    }
    ret[itemKey].push(item);
  });
  return ret;
};
