import React, { useCallback, useState } from "react";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const addTwo = useCallback(
    (
      e:
        | React.MouseEvent<HTMLButtonElement>
        | React.KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 1),
    []
  );

  return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>Add</button> */}
      <button onClick={addTwo}>Add</button>
    </div>
  );
};

export default UseCallback;
