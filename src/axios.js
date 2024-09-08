import axios from "axios";

const instance = axios.create({
  baseURL: "https://app-dcd70.web.app/", //The API (Cloud function URL)
});

export default instance;
