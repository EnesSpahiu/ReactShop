import axios from "axios";
import { userValues } from "./ContactPage";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

export const ProductService = {
  getAllProducts() {
    return axiosInstance.get("/posts");
  },
  getSingleProduct(url: String) {
    return axiosInstance.get("/posts/" + url);
  },
  postUserData(values: userValues) {
    const data = values;
    return axiosInstance.post("/userLogin", data);
  },
};

export default {};