## 📢 hz-validator
华中表单校验规范 module 库

### ✨ 快速开始

http://iris.hikvision.com.cn/huazhong/hz-validator

#### ⚡ 安装
```bash
# 切换到公司仓库源
$ npm config set registry http://af.hikvision.com.cn/artifactory/api/npm/npm-down/
$ npm i hz-validator
```

#### 🏆 使用

```js
import { validator } from 'hz-validator'

const rules = {
  placeName: [
    validator.pleaseInput('场所名称'),
    validator.checkName()
  ],
  placeType: [
    validator.pleaseSelect('场所类型')
  ],
  placeManagePerson: [
    validator.checkName()
  ],
  phone: [
    validator.checkPhone()
  ],
  cameraInfoList: [
    validator.pleaseSelectArray('监控点')
  ]
}
```

### 🔨 API
hz-validator 提供两个模块

* Validator
    *  pleaseInput
    *  pleaseSelect
    *  pleaseSelectArray
    *  checkNumberRange
    *  checkStrLengthRange
    *  checkName
    *  checkPhone
    *  checkVehicle
* regexp
    * name
    * phone
    * telephone
    * vehicle
    * identityCard
    * ip
    * port
    * uuid

### ⏰ 待办

- [ ] npm打包场景测试
- [ ] 或（or）场景的条件校验
- [ ] module 用 rollup 打包问题
- [ ] 打包成js
- [ ] 输出一份声明文件
- [ ] 单元测试编写（test）
- [ ] 补充hui-pro本身拥有的正则表达式
- [ ] ...

### 🚀 更新日志
