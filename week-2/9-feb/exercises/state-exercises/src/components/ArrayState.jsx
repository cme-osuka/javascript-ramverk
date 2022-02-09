import React, { useState } from "react";

function ArrayState() {
  const [cart, setCart] = useState(() => {
    return getCart()
  });

  function handleClick() {
    setCart((prevCart) => {
      return [...prevCart, "tofu"];
    });

    /*const newCart = [...cart];
    newCart.push("tofu");
    setCart(newCart);*/
  }

  function getCart() {
    const rawData = window.localStorage.getItem("myCart");
    if (!rawData) {
      return []
    }

    const data = JSON.parse(rawData)

    return data;
  }

  function saveCart() {
    const data = JSON.stringify(cart);
    window.localStorage.setItem("myCart", data)
  }

  function clearCart() {
    window.localStorage.removeItem("myCart")
    setCart([])
  }

  return (
    <div>
      <button onClick={handleClick}>Add item</button>
      <button onClick={saveCart}>Save</button>
      <button onClick={clearCart}>Clear</button>
      <ul>
        {cart.map((cartItem) => {
          return <li>{cartItem}</li>;
        })}
      </ul>
    </div>
  );
}

export default ArrayState;
