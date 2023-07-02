import { useState } from "react";
import "./App.css";
import Counter from "./screens/ts-counter/Counter";
import Heading from "./screens/ts-counter/components/Heading";
import Section from "./screens/ts-counter/components/Section";

function App() {
  // 親から子にステートを渡すように変更した
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Heading title={"Hello"} />
      <Section title="Different Title">This is my section.</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
    </>
  );
}

export default App;
