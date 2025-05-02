import React, { useEffect, useState } from "react";
import Product from "./Product";
import Spinner from "./Spinner";
import Error from "./Error";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products", {
          cancelToken: source.token,
        });

        setProducts(response.data.products || []);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          setError(error.message || "Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();

    return () => source.cancel("Operation canceled by the user.");
  }, []);

  if (loading) {
    return Spinner();
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {products.length > 0 &&
          products.map((product) => (
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
