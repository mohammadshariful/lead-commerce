import React, { useState } from "react";
import Cart from "../Cart/Cart";
import MyContext from "../ContextApi/ContextApi";
import useProduct from "../Hook/useProduct";
import Product from "../Product/Product";
import "./DashBoard.css";
const DashBoard = () => {
  const [text, setText] = useState("phone");
  const [cart, setCart] = useState([]);
  const [products] = useProduct(text);

  const handlerClick = (selectedProduct) => {
    const exits = cart.find((pd) => pd.slug === selectedProduct.slug);
    if (!exits) {
      const newProduct = [...cart, selectedProduct];
      setCart(newProduct);
    }
  };

  const deleteItems = (item) => {
    const rest = cart.filter((pd) => pd.slug !== item.slug);
    setCart(rest);
  };

  return (
    <MyContext.Provider value={{ deleteItems }}>
      <section className="dashboard-container">
        <form className="search-form">
          <div className="form-control">
            <h3 className="search-header">Searach Item</h3>
            <input
              onChange={(e) => setText(e.target.value)}
              value={text}
              type="text"
              placeholder="Apple Watch,Samsung S21,Mackpro.."
            />
          </div>
        </form>
        <div className="dashboard-home">
          <div className="products-container">
            {products.map((product) => (
              <Product
                key={product.slug}
                product={product}
                handlerClick={handlerClick}
              />
            ))}
          </div>
          <div className="cart-container">
            <Cart cart={cart} />
          </div>
        </div>
      </section>
    </MyContext.Provider>
  );
};

export default DashBoard;
