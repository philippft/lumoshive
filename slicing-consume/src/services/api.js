import axios from "axios";

const BASE_URL = "https://lumoshive-api-furniture.vercel.app/api";

export const getHeader = () => axios.get(`${BASE_URL}/header`);
export const getFurnitureData = () => axios.get(`${BASE_URL}/data`);
export const getCategory = () => axios.get(`${BASE_URL}/category`);
// export const getProduct = () => jujur masih bingung, soalnya ini pagaginate
// exoprt const getTestimonial = () => jujur ini juga bingung paginate
export const subscirbeMai; = (data) => axios.post(`${BASE_URL}/subscribe`, data); 

// export const getAllProducts = () => axios.get(BASE_URL);
// export const getProduct = (id) => axios.get(`${BASE_URL}/${id}`);
// export const AddProduct = (data) => axios.post(BASE_URL, data);
// export const UpdateProduct = (data, id) => axios.put(`${BASE_URL}/${id}`, data);
// export const DeleteProduct = (id) => axios.delete(`${BASE_URL}/${id}`);
