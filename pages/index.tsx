import React, { useState, useEffect } from "react";
import Layout from "@components/Layout/Layout";
import KawaiiHeader from "@components/KawaiiHeader/KawaiiHeader";
import ProductList from "@components/ProductList/ProductList";
const API = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getServerSideProps = async () => {
  const response = await fetch(`${API}/api/avo`);
  const { data }: TAPIAvoResponse = await response.json();

  return {
    props: {
      productList: data,
    },
  };
};

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  );
};

export default HomePage;
