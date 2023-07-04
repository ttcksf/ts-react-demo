import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [post, setPost] = useState<[] | null>(null);
  // useEffectはreturnがなければ特にすることはない
  useEffect(() => {
    console.log("mounting");
    console.log(post);

    return () => console.log("unmounting");
  }, [post]);

  return <div>UseEffect</div>;
};

export default UseEffect;
