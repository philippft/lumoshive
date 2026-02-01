import { useEffect, useState } from "react";
import AllProductLists from "../pages/AllProductLists";
import { getAllProducts, DeleteProduct } from "../services/api";

export default function ProductListContainer() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await getAllProducts();
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  }; 

  useEffect(() => {
    fetchProducts();
  }, []);


  if (products.length == 0) {
        return (
          <div className="flex justify-center items-center min-h-screen bg-slate-900">
            <p className="text-white text-xl animate-pulse">
              Loading data produk...
            </p>
          </div>
        );
  }

  const handleDelete = async (id) => {
    const del = await DeleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
    console.log(del);
  };

  return <AllProductLists products={products} onDelete={handleDelete} />;
  // return <ProductList products={products} onDelete={handleDelete} />;
}
