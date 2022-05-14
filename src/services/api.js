import axios from "axios";

const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/nataliafonseca/beth-store/",
});

export default api;
