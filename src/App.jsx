import { useEffect, useState } from "react";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";

function App() {
  const [productsData, setProductsData] = useState([]);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setProductsData(data));
  }, []);

  //Adding to Cart from Product List
  function handelAddToCart({ id, name, price }) {
    const cartItem = {
      id,
      name,
      price,
      count: 1,
    };

    const existedItem = cartData.find((item) => item.id === id);

    if (existedItem) {
      const updatedCart = cartData.map((item) => {
        if (item.id === id) return { ...item, count: existedItem.count + 1 };
        else return item;
      });

      setCartData(updatedCart);
    } else setCartData([...cartData, cartItem]);
  }

  //Delete, Add, Subtract from existed Cart Item
  function handelCartItem({ type, id }) {
    if (type === "delete") {
      if (confirm("will be Delete from Cart?")) {
        const updatedCart = cartData.filter((item) => item.id !== id);
        setCartData(updatedCart);
      } else return;
    } else if (type === "plus") {
      const updatedCart = cartData.map((item) => {
        if (item.id === id) return { ...item, count: item.count + 1 };
        else return item;
      });
      setCartData(updatedCart);
    } else {
      const updatedCart = cartData.map((item) => {
        if (item.id === id) return { ...item, count: item.count - 1 };
        else return item;
      });
      setCartData(updatedCart);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:md:grid-cols-2">
      <Cart
        cartData={cartData}
        setCartData={setCartData}
        handelCartItem={handelCartItem}
      />

      <Products productsData={productsData} handelAddToCart={handelAddToCart} />
    </div>
  );
}

export default App;
