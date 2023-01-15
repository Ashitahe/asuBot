/*
 * @Descripttion: 处理CQ码
 * @version: 1.0.0
 * @Author: Asuhe
 * @Date: 2022-10-22 00:29:47
 * @LastEditors: Asuhe
 * @LastEditTime: 2023-01-06 22:34:51
 */

/**
 * @description: 从原始信息中提取出所有CQ码
 * @param {*} rawMessage
 * @return {*}
 */
function retrievalCQCodes(rawMessage) {
  const reg = /\[CQ:(.+?)\]/g;
  if (typeof rawMessage === "string") {
    return rawMessage.match(reg);
  }
  return [];
}

/**
 * @description: 转换CQ码为对象形式
 * @param {*} cqCode
 * @return {*}
 */
function parseCQCode(cqCode) {
  if (typeof cqCode === "string") {
    let code = cqCode.slice(1, -1);
    code = code.split(",");
    const type = code.shift().split(":").pop();
    const codeData = code.map((e) => e.split("="));
    const data = {};
    for (const [key, value] of codeData) {
      data[key] = value;
    }
    return { type, data };
  }
  return {};
}

/**
 * @description: 批量处理CQ码
 * @param {*} cqCodeArr
 * @return {*}
 */
function parseCQCodes(cqCodeArr) {
  if (cqCodeArr instanceof Array) {
    return cqCodeArr.map(parseCQCode);
  }
  return [];
}

export default {
  parseCQCode,
  parseCQCodes,
  retrievalCQCodes,
};
