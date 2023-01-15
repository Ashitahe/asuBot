/*
 * @Descripttion: 被动响应消息
 * @version:
 * @Author: Asuhe
 * @Date: 2022-11-27 13:10:52
 * @LastEditors: Asuhe
 * @LastEditTime: 2023-01-06 22:45:43
 */
import plugin from "../plugin/index.mjs";

/**
 * @description: 根据接收的消息响应
 * @param {*} msgData 接受到的消息
 * @param {*} replyConfig 响应配置
 * @param {*} responseHandle 响应句柄
 * @return {*}
 */
function replyMsgByRecive(msgData, replyConfig, responseHandle) {
  const { action = [] } = replyConfig;
  const { message } = msgData;

  // 根据配置，响应对应收到的消息
  for (let i = 0; i < action.length; i++) {
    const {
      receiveMsg = "",
      replyMsg = "",
      callPlugin = false,
      callFunc = "",
    } = action[i];

    if (message === receiveMsg) {
      if (callPlugin) {
        isCallSetu(callFunc)
          .then((res) => {
            responseHandle.end(JSON.stringify(res));
            console.log("已发送", JSON.stringify(res));
          })
          .catch((err) => console.log("isCallSetu Error", err));
        return;
      }
      responseHandle.end(JSON.stringify({ reply: replyMsg }));
      return;
    }
  }
  responseHandle.end();
}

async function isCallSetu(funcName) {
  let info = {};
  try {
    const res = await plugin[funcName]();
    res.forEach((element) => {
      const { urls = {} } = element;
      const { original = "" } = urls;

      info = sendImage(original);
    });
    console.log("sendInfo", info);
  } catch (error) {
    console.log("isCallPlugin error", error);
  }
  return info;
}

const sendImage = (imgUrl) => ({
  reply: `[CQ:image,type=show,file=${imgUrl}]`,
  auto_escape: false,
  at_sender: true,
});

export default {
  replyMsgByRecive,
};
