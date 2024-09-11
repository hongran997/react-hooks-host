// 这个方法不仅返回一个布尔值，还告诉 TypeScript 编译器，如果返回值是 true，那么 value 的类型就是 string。这在类型保护中非常有用。
export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};
export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === 'boolean';
};
export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number';
};
export const isUndef = (value: unknown): value is undefined => {
  return typeof value === 'undefined';
};
export const isObject = (value: unknown): value is Record<any, any> => {
  return value !== null && (typeof value === 'object' || typeof value === 'function');
};
export const isFunction = (value: unknown): value is (...args: any) => any => {
  return typeof value === 'function';
};
