import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child count={count} setCount={setCount} />
      <Child count={count} setCount={setCount} />
    </div>
  );
}

export default Parent;
