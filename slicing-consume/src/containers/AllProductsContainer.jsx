import { useEffect, useState } from "react";
import { getProduct } from "../services/api";
import AllProductsPage from "../pages/AllProductsPage";

export default function AllProductsContainer () {
    const [data, setData] = useState(null);
    console.log(data);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await getProduct();
            setData(res.data.products);
        }
        fetchProducts();
    }, []);

    return <AllProductsPage data={data} />;
}