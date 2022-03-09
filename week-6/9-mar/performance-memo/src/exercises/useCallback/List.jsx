import { useState, useEffect } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Renderade om List");
    setItems(getItems());
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
}