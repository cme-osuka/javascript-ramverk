import React, { useState } from "react";
import "./../App.css";

const MemoizedListItem = React.memo(ListItem);

function ListItem({ item }) {
  console.log("ListItem renderades");
  return <li>{item.name}</li>;
}

const MemoizedList = React.memo(List);

function List({ list }) {
  console.log("List renderades");
  return (
    <ul>
      {list.map((item) => (
        <MemoizedListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

function ReactMemo() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([
    { id: 1, name: "Bob" },
    { id: 2, name: "Rob" },
  ]);

  console.log("ReactMemo renderades");

  function addUser() {
    if (input.length < 2) return;
    setUsers([...users, { id: users.length + 1, name: input }]);
    setInput("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addUser}>Add</button>
        </div>
        <MemoizedList list={users} />
      </header>
    </div>
  );
}

export default ReactMemo;
