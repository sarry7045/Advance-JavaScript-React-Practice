import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsync } from "./productsSlice";
import { addAsync } from "../Cart/cartSlice";
import "./Products.css";

function Product() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  console.log("products", products);

  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]);
  return (
    <div>
      <div className="">
        {products.map((product) => (
          <div className="card">
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "100%" }}
            />
            <h1>{product.title}</h1>
            <p className="price">{product.price}</p>
            <p>{product.description}..</p>
            <p>
              <button onClick={() => dispatch(addAsync(product))}>
                Add to Cart
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Product;
