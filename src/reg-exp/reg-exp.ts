interface RegExps {
  [name: string]: RegExp
}

const regExp: RegExps = {
  /* 通用姓名 不能包含 ' / \ : * ? " < > | 等特殊字符 */
  name: /^[^'\/\\:\*\?"<>\|]*$/,

  /* 手机号码 */
  phone: /^1[3-9]\d{9}$/,

  /* 座机号码 */
  telephone: /^(\d{3,4}-)?\d{3,8}(-\d{2,4})?$/,

  /* 车牌号码，包含新能源车牌 */
  vehicle: /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[ABCDEFGHJK])|([ABCDEFGHJK]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]\d{3}\d{1,3}[领])|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/,

  /* 18位身份证号 不做生日和最后尾数校验的方式 */
  identityCard: /^(?!.*(\d)\1{3})\d{17}(\d|X|x)$/,

  /* ip 127.0.0.1 */
  ip: /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/,

  /* 端口 0～65535 */
  port: /^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/,

  /* UUID 32位大写英文字母、数字、连接符 */
  uuid: /^[a-zA-Z\d]{8}-[a-zA-Z\d]{4}-[a-zA-Z\d]{4}-[a-zA-Z\d]{4}-[a-zA-Z\d]{12}$/
}

export default regExp
