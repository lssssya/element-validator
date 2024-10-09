const regExp = {
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
};

/* 根据结果处理 */
function output(result, errorText, callback) {
    return result ? callback() : callback(new Error(errorText));
}
/* 计算边界 */
function computeLimit(min, max, value, border) {
    const [borderL, borderR] = border;
    const judgeL = borderL ? value >= min : value > min;
    const judgeR = borderR ? value <= max : value < max;
    return judgeL && judgeR;
}
var Utils = {
    output,
    computeLimit
};

/* 必填 */
function pleaseInput(name) {
    let message = `请输入${name}`;
    return {
        required: true,
        message,
        trigger: 'blur'
    };
}
/* 必选 */
function pleaseSelect(name) {
    let message = `请选择${name}`;
    return {
        required: true,
        message,
        trigger: 'change'
    };
}
/* 必选 */
function pleaseSelectArray(name) {
    let message = `请选择${name}`;
    return {
        required: true,
        type: 'array',
        message,
        trigger: 'change'
    };
}
/* ****** 计算校验部分 ****** */
/* 校验 数值是不是处在 min 和 max 之间 */
function checkNumberRange(min, max, border = [true, true]) {
    return {
        validator(rule, value, callback) {
            const test = value;
            const result = Utils.computeLimit(min, max, test, border);
            Utils.output(result, min === 0
                ? `数值限定在 ${max} 以内`
                : `数值限定在 ${min} ~ ${max} 之间`, callback);
        }
    };
}
/* 校验 字符长度是不是处在 min 和 max 之间 */
function checkStrLengthRange(min, max, border = [true, true]) {
    return {
        validator(rule, value, callback) {
            const test = (value + '').length;
            const result = Utils.computeLimit(min, max, test, border);
            Utils.output(result, min === 0
                ? `已选个数限定在 ${max} 以内`
                : `已选个数限定在 ${min} ~ ${max} 之间`, callback);
        }
    };
}
/* 校验 数组长度是不是处在 min 和 max 之间 */
function checkArrayLengthRange(min, max, border = [true, true]) {
    return {
        validator(rule, value, callback) {
            const test = value.length;
            const result = Utils.computeLimit(min, max, test, border);
            Utils.output(result, min === 0
                ? `已选个数限定在 ${max} 以内`
                : `已选个数限定在 ${min} ~ ${max} 之间`, callback);
        }
    };
}
/* ****** 正则校验部分 ****** */
/* 校验 无特殊字符名称 */
function checkName() {
    return {
        pattern: regExp.name,
        message: '输入应不含 \' / \\ : * ? " < > | 等特殊字符',
        trigger: 'change,blur'
    };
}
/* 校验 手机号 */
function checkPhone() {
    return {
        pattern: regExp.phone,
        message: '请输入正确的手机号码',
        trigger: 'change,blur'
    };
}
/* 校验 车牌号码 */
function checkVehicle() {
    return {
        pattern: regExp.vehicle,
        message: '请输入正确的车牌号码',
        trigger: 'change'
    };
}

var validator = /*#__PURE__*/Object.freeze({
    __proto__: null,
    checkArrayLengthRange: checkArrayLengthRange,
    checkName: checkName,
    checkNumberRange: checkNumberRange,
    checkPhone: checkPhone,
    checkStrLengthRange: checkStrLengthRange,
    checkVehicle: checkVehicle,
    pleaseInput: pleaseInput,
    pleaseSelect: pleaseSelect,
    pleaseSelectArray: pleaseSelectArray
});

export { regExp, validator };
