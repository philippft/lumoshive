import { useEffect, useState } from "react";
import AllProductLists from "../pages/AllProductLists";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { getAllProducts, DeleteProduct } from "../services/api";

export default function ProductListContainer() {
  const [products, setProducts] = useState([]);

  const { modalConfig, setModalConfig } = useContext (ProductContext);

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
    try {
      const del = await DeleteProduct(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      setModalConfig({
        isOpen: true,
        mode: "info",
        title: "Berhasil Dihapus!",
        message: `Produk ${del.data.title} berhasil dihapus.`,
        type: "success",
      });
    } catch (error) {
      setModalConfig({
        isOpen: true,
        title: "Gagal Menghapus!",
        message: `Error: ${error.message}`,
        type: "error",
      });
    }
  };

  return <AllProductLists products={products} onDelete={handleDelete} modalConfig={modalConfig} setModalConfig={setModalConfig} />;
}
