export const add = (x: number, y: number): number => {
  return x + y;
};

export const sub = (x: number, y: number): number => {
  return x - y;
};

export const mul = (x: number, y: number): number => {
  return x * y;
};

export const div = (x: number, y: number): number => {
  return x / y;
};

export const mod = (x: number, y: number): number => {
  return x % y;
};

export const total = (x: number[]): number => {
  let sum: number = 0;
  for (let i of x) {
    sum += i;
  }
  return sum;
};

export const avg = (x: number[]): number => {
  return total(x) / x.length;
};
