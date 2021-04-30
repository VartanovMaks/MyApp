import axios from 'axios';

let axiosProducts = axios.create({
    baseURL:'https://fakestoreapi.com'
})

const getProducts = async ()=>{
    let {data} = await axiosProducts ('/products');
    return data;
}
const getProduct = async (id)=>{
    let {data} = await axiosProducts (`/products/${id}`);
    return data;
}

export {getProducts, getProduct};