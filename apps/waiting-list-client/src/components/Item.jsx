import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function Item(props) {
  const [time, setTime] = useState(() => {

  })
  const { item } = props;

  const getTS = (ts) => {
    let d = dayjs(ts);
    return d.fromNow();
  }


  return (
    <div key={item.id} style={{ color: item.color }}>
      {item.name} - {item.room} - {getTS(item.timestamp)}
      <button onClick={() => props.onLowerHand(item.id)}>✅</button>
    </div>
  );
}

export default Item;
