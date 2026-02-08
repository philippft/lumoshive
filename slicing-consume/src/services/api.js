import axios from "axios";

const BASE_URL = "https://lumoshive-api-furniture.vercel.app/api";

export const getHeader = async () => {
    const response = axios.get(`${BASE_URL}/header`);
    return response;
};

export const getFurnitureData = async () => {
  const response = await axios.get(`${BASE_URL}/data`);
  return response.data;
};

export const getCategory = () => axios.get(`${BASE_URL}/category`);
export const getProduct = (page, total) => axios.get(`${BASE_URL}/products?page=${page}&limit=${total}`);

export const getTestimonial = (page, limit) => axios.get(`${BASE_URL}/testimonials?page=${page}&limit=${limit}`);

export const subscribeMail = (data) => axios.post(`${BASE_URL}/subscribe`, data); 

