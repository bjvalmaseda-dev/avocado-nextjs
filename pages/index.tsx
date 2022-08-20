import React, { useEffect, useState } from "react";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data, length }) => setProductList(data));
  }, []);

  return (
    <>
      <h1>Hola Platzi</h1>
      {productList.map((product) => (
        <div>{product.name}</div>
      ))}
    </>
  );
};

export default Home;
