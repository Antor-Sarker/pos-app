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

  function handelAddToCart({id,name,price}) {
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

  function handelCartItem({type,id}){
    
    if(type==='delete'){
      const updatedCart = cartData.filter(item=>item.id!==id)
      setCartData(updatedCart)
    }
    else if(type==='plus'){
      const updatedCart = cartData.map(item=>{
        if(item.id===id) return {...item, count:item.count+1}
        else return item
      })
      setCartData(updatedCart)
    }
    else {
      const updatedCart = cartData.map(item=>{
        if(item.id===id) return {...item, count: item.count-1}
        else return item
      })
      setCartData(updatedCart)
    }


  }

  console.log(cartData);

  return (
    <div className="grid grid-cols-2">
      <Cart
        cartData={cartData}
        handelCartItem={handelCartItem}
      />

      <Products
        productsData={productsData}
        handelAddToCart={handelAddToCart}
        />
    </div>
  );
}

export default App;
