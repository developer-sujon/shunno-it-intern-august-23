import axios from "axios";
import { base_server_prefix, base_server_url } from "../config/config";

const publicInstance = axios.create({
  baseURL: `${base_server_url}${base_server_prefix}`,
  
});

export default publicInstance;
