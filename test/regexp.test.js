const assert = require('power-assert')
import { regExp } from '../lib/index.ts'

describe('regexp', () => {
  describe('name', () => {
    const name = '测试名称'
    it('校验正确情况', () => {
      assert(regExp.name.test(name))
    })

    const errorName = '测试名称?!'
    it('校验错误情况', () => {
      assert(!regExp.name.test(errorName))
    })
  })
})
