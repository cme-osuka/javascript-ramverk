import { selector } from "recoil";
import { cartState } from "./atom";

export const cartStatus = selector({
  key: "cartStatus",
  get: ({ get }) => {
    
    // Hämta vår cart-atom
    const cart = get(cartState);

    const totalItems = cart.length;
    const totalPrice = cart.reduce((total, current) => {
      const formattedPrice = parseInt(current.price)
      return total + formattedPrice
    }, 0)

    return {
      totalItems,
      totalPrice
    }
  }
})

export const removeItemSelector = selector({
  key: "removeItemSelector",
  get: () => {},
  set: ({ get, set }, itemIndex) => {
    const cart = get(cartState);

    let newCart = [...cart]
    // Ta bort 1 på indexet vi anger
    newCart.splice(itemIndex, 1);

    set(cartState, newCart);
  }
})