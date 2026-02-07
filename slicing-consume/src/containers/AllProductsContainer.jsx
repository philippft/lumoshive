import { useEffect, useState } from "react";
import { getProduct } from "../services/api";
import AllProductsPage from "../pages/AllProductsPage";

export default function AllProductsContainer () {
    const [data, setData] = useState(null);
    console.log(data);

    const fetchProducts = async (page, total) => {
      const res = await getProduct(page, total);
      setData(res.data);
    };

    useEffect(() => {
        fetchProducts(1, 8);
    }, []);

    return <AllProductsPage data={data} onChange={fetchProducts} />;
}