import axios from "axios";
const baseURL = "https://t-vault-api.herokuapp.com/safe";
const client = axios.create({
    baseURL: baseURL
  });
export default client; 
