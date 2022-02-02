import React from "react";

function ListItem(props) {
  return (
    <div>
      <p>{props.name}</p>
      <button onClick={props.handleComplete}>✅</button>
    </div>
  )
}

export default ListItem;