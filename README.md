## 📢 element-validator
表单校验规范 module 库

### ✨ 快速开始

#### ⚡ 安装
```bash
$ npm i element-validator
```

#### 🏆 使用

```js
import { validator } from 'element-validator'

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
element-validator 提供两个模块

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

- [x] npm打包场景测试
- [x] 或（or）场景的条件校验
- [x] module 用 rollup 打包问题
- [x] 打包成js
- [x] 输出一份声明文件
- [x] 单元测试编写（test）
- [ ] 单元vue测试编写

### 🚀 更新日志
