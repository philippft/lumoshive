// ProductListContainer.jsx
import { useEffect, useState } from "react";
import ProductList from "../../components/products/ProductList";
import { getProducts, deleteProduct } from "../services/api";

export default function ProductListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return <ProductList products={products} onDelete={handleDelete} />;
}
