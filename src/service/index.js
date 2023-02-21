// 引入封裝好的service
import service from "@/service.js";

// 接口
let baseURL;

// 配置開發環境
if (process.env.NODE_ENV === "development") {
  baseURL = "123";
}

// 配置生產環境
if (process.env.NODE_ENV === "production") {
  baseURL = "123";
}

// 設置請求
const header = {
  Accept: "application/json;charset=UTF-8",
};

// 根據自己需求
let _service = {
  getList(data) {
    const url = baseURL + "index/getList";
    return service.post(url, data, header);
  },
};
export default _service;
