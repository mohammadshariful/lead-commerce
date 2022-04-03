import { useEffect, useState } from "react";
import { getItem } from "../../utilities/fakeDB";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = getItem();
    const saveCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((pd) => pd.slug === id);
      if (addedProduct) {
        addedProduct.quantity = storedCart[id];
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);

  return [cart, setCart];
};

export default useCart;
