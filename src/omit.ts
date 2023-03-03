type Obj = Record<string, any>;

export const omit = <T extends Obj, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> => {
  const result = { ...obj };

  keys.forEach((key) => {
    delete result[key];
  });

  return result;
};
