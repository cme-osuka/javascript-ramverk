import React, { useState } from 'react'

/*const names = ["Kerstin", "Albert", "Bob", "Kurt", "Karen"];*/

function ObjectState() {
  const [guest, setGuest] = useState({
    food: "Nuggets",
    drink: "Moet",
    table: 7,
    server: "Karen"
  })

  /*function getRandomServer() {
    return names[Math.floor(Math.random() * names.length)];
  }*/

  function handleClick() {
    setGuest((prevGuest) => {
      return { 
        ...prevGuest,
        server: "Kerstin"
       }
    })
  }

  return (
    <div>
      <p>Server: {guest.server}, food: {guest.food}</p>
      <button onClick={handleClick}>Remove Karen</button>
    </div>
  )
}

export default ObjectState