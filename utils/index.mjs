/*
 * @Descripttion:
 * @version:
 * @Author: Asuhe
 * @Date: 2022-10-22 00:29:21
 * @LastEditors: Asuhe
 * @LastEditTime: 2023-01-06 22:48:54
 */
import sendMsg from "./sendMsg.mjs";

import dealMsg from "./dealMsg.mjs";

import dealCQCode from "./parseCQ.mjs";

export default {
  ...sendMsg,
  ...dealMsg,
  ...dealCQCode,
};
