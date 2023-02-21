import axios from "axios";

const initAxios = axios.create({
  timeout: 1800000,
});

// 請求攔截
initAxios.interceptors.request.use(
  (config) => {
    // 在發送前做些甚麼
    return config;
  },
  (error) => {
    // 對請求錯誤做點甚麼
    return error;
  }
);

// 響應攔截
initAxios.interceptors.response.use((res) => {
  if (res.resultCode === 200) {
    return res.data;
  } else {
    return { resultCode: -1 };
  }
});

// 導出
export default () => initAxios;
