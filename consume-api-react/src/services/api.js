import axios from "axios";

const BASE_URL =  'https://fakestoreapi.com/products';

export const getAllProducts = () => axios.get(BASE_URL);
export const getProduct = (id) => axios.get(`${BASE_URL}/${id}`);
export const AddProduct = (data) => axios.post(BASE_URL, data);
export const UpdateProduct = (data, id) => axios.put(`${BASE_URL}/${id}`, data);
export const DeleteProduct = (id) => axios.delete(`${BASE_URL}/${id}`);
