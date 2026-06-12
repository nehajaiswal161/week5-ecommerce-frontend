import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      borderRadius: "10px"
    }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100px", height: "100px" }}
      />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <button
        onClick={() => dispatch(addToCart(product))}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
