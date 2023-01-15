/*
 * @Descripttion: 主动发送消息
 * @version:
 * @Author: Asuhe
 * @Date: 2022-10-22 00:34:42
 * @LastEditors: Asuhe
 * @LastEditTime: 2023-01-07 11:20:52
 */
import axios from "axios";
import fs from "fs";
const rawConfig = fs.readFileSync("./config.json");
const config = JSON.parse(rawConfig);
const { postServerConfig = {} } = config;

const baseUrl = `http://${postServerConfig.host}:${postServerConfig.port}`;

const privateMsg = "/send_private_msg";
const groupMsg = "/send_group_msg";
const forwardGroupMsg = "/send_group_forward_msg";
const sendMsg = "/send_msg";
const deleteMsg = "/delete_msg";
const kickPerson = "/set_group_kick";
const banPerson = "/set_group_ban";
const banAnonymous = "/set_group_anonymous_ban";
const banGroup = "/set_group_whole_ban";
const getMsg = "/get_msg";

axios.interceptors.response.use(
  (resp) => {
    return resp.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function sendPrivateMsg(qq = "", message = "") {
  const url = baseUrl.concat(privateMsg);
  return axios.post(url, {
    user_id: qq,
    message,
  });
}

function sendGroupMsg(groudId = "", message = "", escape = false) {
  const url = baseUrl.concat(groupMsg);
  return axios.post(url, {
    group_id: groudId,
    message,
    auto_escape: escape,
  });
}

function sendForwardGroupMsg(groudId = "", message = "") {
  const url = baseUrl.concat(forwardGroupMsg);
  return axios.post(url, {
    group_id: groudId,
    message,
  });
}

export default {
  sendGroupMsg,
  sendPrivateMsg,
  sendForwardGroupMsg,
};
