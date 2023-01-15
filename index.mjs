/*
 * @Descripttion:
 * @version:
 * @Author: Asuhe
 * @Date: 2022-10-19 22:44:46
 * @LastEditors: Asuhe
 * @LastEditTime: 2023-01-07 11:20:33
 */
import http from "http";
import fs from "fs";

import dealMsg from "./utils/index.mjs";
import Enum from "./constant.mjs";

const rawConfig = fs.readFileSync("./config.json");
const config = JSON.parse(rawConfig);

const { replyMsgByRecive } = dealMsg;
const { MessageTypeEnum = {}, PostTypeEnum = {} } = Enum;
const {
  serverConfig = {},
  privateResponseConfig = {},
  groupResponseConfig = {},
  commonResponseConfig = {},
} = config;

/**
 * @description: 响应收到的消息
 * @param {*} messageData
 * @param {*} responseHandle
 * @return {*}
 */
const replyMsg = (messageData, responseHandle) => {
  try {
    const msgData = JSON.parse(messageData);
    const {
      post_type = "",
      message_type = "",
      message = "",
      sender = {},
    } = msgData;

    const { user_id = "", nickname = "" } = sender;
    // 若上报消息类型为聊天消息，则进行处理。否则忽略
    if (post_type === PostTypeEnum.Message) {
      console.log(`收到来自${nickname}($ {user_id})的消息：${message}`);

      const { action: commonAction } = commonResponseConfig;

      switch (message_type) {
        case MessageTypeEnum.Group:
          // privateResponseConfig.action.concat(action);
          const { action: privateAction } = privateResponseConfig;
          return replyMsgByRecive(
            msgData,
            {
              ...privateResponseConfig,
              action: privateAction.concat(commonAction),
            },
            responseHandle
          );
        case MessageTypeEnum.Private:
          // groupResponseConfig.action.concat(action);
          const { action: groupAction } = groupResponseConfig;
          return replyMsgByRecive(
            msgData,
            {
              ...groupResponseConfig,
              action: groupAction.concat(commonAction),
            },
            responseHandle
          );
        default:
          return replyMsgByRecive(
            msgData,
            commonResponseConfig,
            responseHandle
          );
      }
    }
    responseHandle.end();
  } catch (err) {
    console.log("ERROR:", err);
  }
};

/**
 * @description: 启动服务
 * @param {*} http
 * @param {*} res
 * @return {*}
 */
const server = http.createServer((req, res) => {
  let reciveData = "";
  // 被动响应
  // 如果接受到数据，则根据消息类型响应
  req.on("data", (rawData) => (reciveData += rawData));
  req.on("end", () => replyMsg(reciveData, res));
});

server.listen(serverConfig.port, serverConfig.host, () => {
  const serverRunning = `${serverConfig.host}:${serverConfig.port}`;
  console.log(`server running at ${serverRunning}`);
});
