import { useEffect, useState } from "react";
import { getTestimonial } from "../services/api";
import TestimonialPage from "../pages/TestimonialPage";

export default function TestimonialContainer () {
    const [data, setData] = useState(null);
    console.log(data);

    const fetchTestimonial = async (page, limit) => {
      const res = await getTestimonial(page, limit);
      console.log(res);
      const data = res.data
      setData(data);
    };

    useEffect(() => {
        fetchTestimonial(1, 1);
    }, []);

    return <TestimonialPage data={data} onChange={fetchTestimonial} />;
}