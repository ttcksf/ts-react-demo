import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  // 型指定でnullを書かなくてもオプショナルチェーンが使えるならそれでもOK
  console.log(inputRef?.current?.value);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default UseRef;
