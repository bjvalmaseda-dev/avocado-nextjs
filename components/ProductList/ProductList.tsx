import React from "react";
import { Card } from "semantic-ui-react";
import Link from "next/link";

type ProductListProps = {
  products: TProduct[];
};

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => {
    return (
      <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
        <Card
          as="a"
          header={name}
          image={image}
          meta={
            <Card.Meta style={{ color: "dimgray" }}>
              {intl.format(price)}
            </Card.Meta>
          }
        />
      </Link>
    );
  });

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
);

export default ProductList;
