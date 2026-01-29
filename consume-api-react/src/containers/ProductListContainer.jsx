import { useEffect, useState } from "react";
import AllProductLists from "../pages/AllProductLists";
import { getAllProducts } from "../services/api";

export default function ProductListContainer() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await getAllProducts();
      // console.log("Ini Data Dari Api", res.data);
      // console.log("Ini data res: ", res);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  }; 

  useEffect(() => {
    fetchProducts();
  }, []);

  // const handleDelete = async (id) => {
  //   await deleteProduct(id);
  //   setProducts((prev) => prev.filter((p) => p.id !== id));
  // };

  return <AllProductLists products={products} />;
  // return <ProductList products={products} onDelete={handleDelete} />;
}
