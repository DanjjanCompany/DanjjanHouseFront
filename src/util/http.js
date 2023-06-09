import axios from "axios";
import store from "@/store";

let instance = axios.create({
  // baseURL: 'http://192.168.130.83:8080/api',
  baseURL: "http://localhost:9000/api",
});

// axios 요청 보내기 전 인터셉트
instance.interceptors.request.use((config) => {
  // 헤더에 access-token 추가
  config.headers["access-token"] = store.state.userStore.token;
  return config;
});

export default instance;
