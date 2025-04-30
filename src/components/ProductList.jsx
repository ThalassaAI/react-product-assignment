import React from "react";
import Product from "./Product";
import productsData from "../data/products.json";

// console.log(productsData);

function ProductList() {
  console.log("ProductList component rendered");
  return (
    <div className="container mt-4">
      <div className="row">
        {productsData.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            images={product.images}
            image={product.thumbnail}
            title={product.title}
            price={product.price}
            description={product.description}
            discountPercentage={product.discountPercentage}
            tags={product.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
