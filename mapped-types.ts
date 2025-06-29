type Volume = {
  height: Number;
  width: Number;
  depth: Number;
};

type Area<T> = { 
  [key in keyof T]: T[key];
};

const area1: Area<{ height: number; width: number }> = {
  height: 10,
  width: 10,
};

console.log({ area1 });
