import axios from "axios";

const BASE_URL =  import.meta.env.VITE_URL;

const getAllProduct = () => axios.get(BASE_URL);
const getProduct = (id) => axios.get(`${BASE_URL}/${id}`);
const AddProduct = (data) => axios.post(`${BASE_URL}`, data);
const UpdateProduct = (data, id) => axios.put(`${BASE_URL}/${id}`, data);
const DeleteProduct = (id) => axios.delete(`${BASE_URL}/${id}`);


export default {
                getAllProduct, 
                getProduct, 
                AddProduct, 
                UpdateProduct, 
                DeleteProduct
              };