import React from "react";
import ListItem from "./ListItem";

function List(props) {

  function handleComplete() {
    console.log("complete");
  }

  return (
    <div>
      {props.data.map((item) => {
        return <ListItem name={item} handleComplete={handleComplete} />;
      })}
    
    </div>
  );
}

export default List;
