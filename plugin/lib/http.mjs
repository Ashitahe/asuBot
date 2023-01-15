/*
 * @Descripttion:
 * @version:
 * @Author: Asuhe
 * @Date: 2023-01-07 11:21:43
 * @LastEditors: Asuhe
 * @LastEditTime: 2023-01-07 11:22:58
 */
import axios from "axios";

axios.interceptors.response.use(
  (resp) => {
    return resp.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
