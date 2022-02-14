import React, { useState } from "react";

const breakoutRooms = Array(12)
  .fill("")
  .map((_, i) => <option value={`BR${i + 1}`} key={"option" + i}>BR{i + 1}</option>);

function InputBox(props) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("general");
  // Namn, breakout-room

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleRoomChange(e) {
    setRoom(e.target.value)
  }

  return (
    <div>
      <input
        onChange={handleNameChange}
        placeholder="Namn"
        type="text"
        value={name}
      />
      <select onChange={handleRoomChange} value={room}>
        <option value="general">General</option>
        {breakoutRooms}
      </select>
      <button onClick={() => props.onRaiseHand(name, room)}>✋</button>
    </div>
  );
}

export default InputBox;
