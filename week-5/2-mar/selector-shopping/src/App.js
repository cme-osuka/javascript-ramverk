import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import { cartState } from "./recoil/cart/atom";
import { cartStatus, removeItemSelector } from "./recoil/cart/selectors";
import { productsState } from "./recoil/products/atom";

function App() {
  const products = useRecoilValue(productsState);
  const [cart, setCart] = useRecoilState(cartState);
  const { totalItems, totalPrice } = useRecoilValue(cartStatus);

  const removeItem = useSetRecoilState(removeItemSelector);

  function handleAdd(product) {
    const newCart = [...cart, product];
    setCart(newCart);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Shoppa loss</h3>
        {products.map((product) => (
          <button key={product.id} onClick={() => handleAdd(product)}>
            {product.title} - {product.price}kr
          </button>
        ))}
        <div>
          <h3>Din varukorg</h3>
          {cart.map((product, index) => (
            <div>
              {product.title}{" "}
              <button onClick={() => removeItem(index)}>X</button>
            </div>
          ))}
          <p>Antal varor: {totalItems}</p>
          <p>Summa: {totalPrice}kr</p>
        </div>
      </header>
    </div>
  );
}

export default App;
