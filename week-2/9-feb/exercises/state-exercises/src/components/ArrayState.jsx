import React, { useState } from "react";

function ArrayState() {
  const [cart, setCart] = useState([]);

  function handleClick() {
    setCart((prevCart) => {
      return [...prevCart, "tofu"];
    });

    /*const newCart = [...cart];
    newCart.push("tofu");
    setCart(newCart);*/
  }

  return (
    <div>
      <button onClick={handleClick}>Add item</button>
      <ul>
        {cart.map((cartItem) => {
          return <li>{cartItem}</li>;
        })}
      </ul>
    </div>
  );
}

export default ArrayState;
