import "./App.css";
import InputBox from "./components/InputBox";
import { io } from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import { getRandomColor } from "./utils";
import WaitingList from "./components/WaitingList";

function App() {
  const [list, setList] = useState([]);
  const socket = useRef();
  // Timestamp: Indikation på hur längesen någon bad om hjälp
  // ✅ Math.random för random färg
  // Kevins MP3-ljud
  // ✅ Namn, Breakout room (optional)
  // Ändra favicon/title om listan är tom eller inte
  // Wishlist: Notifikation

  useEffect(() => {
    socket.current = io("https://waitinglist.osuka.dev");

    socket.current.on("connect", () => {
      console.log("Connected");
    });

    socket.current.on("new", (data) => {
      console.log(data);
      setList(data);
    })

    socket.current.on("error", (err) => {
      console.log(err);
    })
  }, []);



  function raiseHand(name, room) {
    socket.current.emit("help", {
      name: name,
      room: room,
      color: getRandomColor()
    })
  }

  function lowerHand(id) {
    console.log("Removed: " + id)
    socket.current.emit("done", {
      id: id
    })
  }

  return (
    <div>
      <InputBox onRaiseHand={raiseHand} />
      <WaitingList onLowerHand={lowerHand} list={list} />
    </div>
  );
}

export default App;
