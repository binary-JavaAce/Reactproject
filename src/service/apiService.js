import axios from "axios";

const url = axios.create({
  baseURL: "http://localhost:8080",
});

const getProducts = () => url.get("shopping/api/products");

export { getProducts };
