import React from "react";

function Child(props) {

  function addOne() {
    props.setCount(props.count + 1)
  }

  return (
    <div>
      {props.count}
      <button onClick={addOne}>Add 1</button>
    </div>
  );
}

export default Child;
