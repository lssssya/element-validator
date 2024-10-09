import regExp from '../reg-exp/reg-exp'
import Utils from './utils.ts'
import { PatternRules, RequiredArrayRules, RequiredRules, ValidatorArrayRules, ValidatorRules } from 'validator.d.ts'

/* 必填 */
export function pleaseInput (name: string): RequiredRules {
  let message = `请输入${ name }`
  return {
    required: true,
    message,
    trigger: 'blur'
  }
}

/* 必选 */
export function pleaseSelect (name: string): RequiredRules {
  let message = `请选择${ name }`
  return {
    required: true,
    message,
    trigger: 'change'
  }
}

/* 必选 */
export function pleaseSelectArray (name: string): RequiredArrayRules {
  let message = `请选择${ name }`
  return {
    required: true,
    type: 'array',
    message,
    trigger: 'change'
  }
}

/* ****** 计算校验部分 ****** */

/* 校验 数值是不是处在 min 和 max 之间 */
export function checkNumberRange (
  min: number,
  max: number,
  border: [boolean, boolean] = [true, true]
): ValidatorRules {
  return {
    validator (rule, value, callback) {
      const test = value
      const result = Utils.computeLimit(min, max, test, border)
      Utils.output(
        result,
        min === 0
          ? `数值限定在 ${ max } 以内`
          : `数值限定在 ${ min } ~ ${ max } 之间`,
        callback
      )
    }
  }
}

/* 校验 字符长度是不是处在 min 和 max 之间 */
export function checkStrLengthRange (
  min: number,
  max: number,
  border: [boolean, boolean] = [true, true]
): ValidatorRules {
  return {
    validator (rule, value, callback) {
      const test = (value + '').length
      const result = Utils.computeLimit(min, max, test, border)
      Utils.output(
        result,
        min === 0
          ? `已选个数限定在 ${ max } 以内`
          : `已选个数限定在 ${ min } ~ ${ max } 之间`,
        callback
      )
    }
  }
}

/* 校验 数组长度是不是处在 min 和 max 之间 */
export function checkArrayLengthRange (
  min: number,
  max: number,
  border: [boolean, boolean] = [true, true]
): ValidatorArrayRules {
  return {
    validator (rule, value, callback) {
      const test = value.length
      const result = Utils.computeLimit(min, max, test, border)
      Utils.output(
        result,
        min === 0
          ? `已选个数限定在 ${ max } 以内`
          : `已选个数限定在 ${ min } ~ ${ max } 之间`,
        callback
      )
    }
  }
}

/* ****** 正则校验部分 ****** */

/* 校验 无特殊字符名称 */
export function checkName (): PatternRules {
  return {
    pattern: regExp.name,
    message: '输入应不含 \' / \\ : * ? " < > | 等特殊字符',
    trigger: 'change,blur'
  }
}

/* 校验 手机号 */
export function checkPhone (): PatternRules {
  return {
    pattern: regExp.phone,
    message: '请输入正确的手机号码',
    trigger: 'change,blur'
  }
}

/* 校验 车牌号码 */
export function checkVehicle (): PatternRules {
  return {
    pattern: regExp.vehicle,
    message: '请输入正确的车牌号码',
    trigger: 'change'
  }
}
