import axios from "axios";

const BASE_URL = 'https://fakestoreapi.com/products'; 

const getAllProduct = () => axios.get(BASE_URL);
const getProduct = (id) => axios.get(`${BASE_URL}/${id}`);
const AddProduct = () => axios.post(`${BASE_URL}`);
const UpdateProduct = (id) => axios.put(`${BASE_URL}/${id}`);
const DeleteProduct = (id) => axios.delete(`${BASE_URL}/${id}`);


export default {
                getAllProduct, 
                getProduct, 
                AddProduct, 
                UpdateProduct, 
                DeleteProduct
              };