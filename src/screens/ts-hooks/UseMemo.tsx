import React, { useMemo } from "react";

type fibFunc = (n: number) => number;
const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};
const UseMemo = () => {
  const myNum = 40;
  const result = useMemo<number>(() => fib(myNum), [myNum]);
  // const result = fib(myNum);
  return (
    <div>
      <h2>{result}</h2>
    </div>
  );
};

export default UseMemo;
