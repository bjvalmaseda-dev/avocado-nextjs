import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const [product, setProduct] = useState<TProduct>();
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    fetch(`/api/avo/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  return <div>Pagina de producto de {product?.name}</div>;
};

export default ProductItem;
