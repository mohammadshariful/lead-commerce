import { useEffect, useState } from "react";

const useProduct = (searchText) => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data.data));
  }, [searchText]);
  return [products];
};

export default useProduct;
