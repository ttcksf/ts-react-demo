import React, { ReactNode, useState } from "react";

type CounterProps = {
  // useStateを定義したときにマウスホバーすると型名を取得できる
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const Counter = ({ setCount, children }: CounterProps) => {
  // 最新のTypeScriptでは自動推論が働くことがある
  // const [count, setCount] = useState(0);
  // const [count, setCount] = useState<number>(0);
  return (
    <div>
      {/* App.tsxのCount is {count}がchildrenになる */}
      <h1>{children}</h1>
      <button onClick={() => setCount((current) => current + 1)}>+</button>
      <button onClick={() => setCount((current) => current - 1)}>-</button>
    </div>
  );
};

export default Counter;
