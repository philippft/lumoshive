import { useState, useEffect } from "react";
import { getHeader, getFurnitureData } from "../services/api";
import  HeaderPage from "../pages/HeaderPage";

export default function HeaderContainer() {
    const [data, setData] = useState({ header: null, stats: null });

    // const [dataHeader, setDataHeader] = useState(null);
    // const [stats, setStats] = useState(null);

    const fetchStats = async () => {
        try {
            const res = await getFurnitureData();
            return res;
        } catch (error) {
            console.log(error);
        }
    };

    const fetchProducts = async () => {
        try {
            const res = await getHeader();
            console.log("res header container:", res.data);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchAllDataHeader = async () => {
        try {
            const [headerRes, statsRes] = await Promise.all([
            fetchProducts(),
            fetchStats(), 
            ]);

            setData({
                header: headerRes,
                stats: statsRes,
            });
        } catch (error) {
            console.log(error);
        }
        };
        fetchAllDataHeader();
    }, []);

  return <HeaderPage data={data} />;
}
