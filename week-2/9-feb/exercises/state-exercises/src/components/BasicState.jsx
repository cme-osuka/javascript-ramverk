import React, { useState } from 'react'

function BasicState() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Antal click: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default BasicState