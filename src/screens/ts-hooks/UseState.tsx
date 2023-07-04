import React, { useState } from "react";

interface User {
  id: number;
  username: string;
}
const UseState = () => {
  // const [count, setCount] = useState<User[]>([]);
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User[] | null>(null);

  return <div>UseState</div>;
};

export default UseState;
