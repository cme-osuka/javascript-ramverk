import React, { useState } from "react";

const DynamicElements = () => {
  const [elements, setElements] = useState([
    { title: "Hej", type: "div" },
    { title: "Hejdå", type: "p" },
  ]);

  return (
    <div>
      {elements.map((e) => {
        if (e.type === "div") {
          return <div>{e.title}</div>;
        }
        if (e.type === "p") {
          return <p>{e.title}</p>
        }
      })}
    </div>
  );
};

export default DynamicElements;
