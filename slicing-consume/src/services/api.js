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

export const getCategory = async () => {
  const response = await axios.get(`${BASE_URL}/category`);
  return response.data;
};
// export const getProduct = () => jujur masih bingung, soalnya ini pagaginate
// exoprt const getTestimonial = () => jujur ini juga bingung paginate
export const subscribeMail = (data) => axios.post(`${BASE_URL}/subscribe`, data); 

