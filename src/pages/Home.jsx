import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/api";
import {
  setProducts,
  setLoading,
} from "../redux/slices/productSlice";

const Home = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const { products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading(true));

      const data = await getProducts();

      dispatch(setProducts(data));
      dispatch(setLoading(false));
    };

    fetchProducts();
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Products</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
