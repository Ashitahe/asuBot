/*
 * @Descripttion:
 * @version:
 * @Author: Asuhe
 * @Date: 2023-01-07 11:19:08
 * @LastEditors: Asuhe
 * @LastEditTime: 2023-01-07 12:18:55
 */
import request from "./lib/http.mjs";

const API_BASE_URL = "https://api.lolicon.app/setu/v2";

async function getSetu(path = {}) {
  let res = { error: true };
  try {
    res = await request.get(API_BASE_URL, path);
  } catch (error) {
    console.log("getSetu error", error);
  }
  return res;
}

export default {
  getSetu,
};
