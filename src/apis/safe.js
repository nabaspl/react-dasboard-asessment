import axios from "axios";
const baseURL = "***REMOVED***";
const client = axios.create({
    baseURL: baseURL
  });
export default client; 
