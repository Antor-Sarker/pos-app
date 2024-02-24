import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";

function App() {
  return (
      <div className="grid grid-cols-2">
         <Cart/>
         <Products/>
      </div>
  );
}

export default App;
