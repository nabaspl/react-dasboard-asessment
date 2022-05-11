import axios from "axios";
const baseURL = process.env.PUBLIC_URL;
const client = axios.create({
    baseURL: baseURL
  });
export default client; 
