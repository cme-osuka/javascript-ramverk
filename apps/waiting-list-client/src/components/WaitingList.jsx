import React from "react";
import Item from "./Item";

function WaitingList(props) {


  return (
    <div>
      {props.list.map((item) => (
        <Item item={item} onLowerHand={props.onLowerHand} />
      ))}
    </div>
  );
}

export default WaitingList;
