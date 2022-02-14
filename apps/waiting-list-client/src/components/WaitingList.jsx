import React from "react";

function WaitingList(props) {
  return (
    <div>
      {props.list.map((item) => (
        <div style={{ color: item.color }}>
          {item.name} - {item.room}
          <button onClick={() => props.onLowerHand(item.id)}>✅</button>
        </div>
      ))}
    </div>
  );
}

export default WaitingList;
