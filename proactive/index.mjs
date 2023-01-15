/*
 * @Descripttion: 主动发送消息
 * @version: 
 * @Author: Asuhe
 * @Date: 2022-10-22 00:59:44
 * @LastEditors: Asuhe
 * @LastEditTime: 2023-01-06 22:40:59
 */
const sendMsg = require("../utils/sendMsg.mjs");

// 定时发送的群
const timer = setInterval(async () => {
  const time = new Date();
  const res = await sendMsg.sendPrivateMsg("1063251316", 666);
  console.log("res", res);
  clearInterval(timer);
  // }
}, 3000);