import axios from "axios";
import { base_server_prefix, base_server_url } from "../config/config";

const publicInstance = axios.create({
  baseURL: `${base_server_url}${base_server_prefix}`,
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

export default publicInstance;
