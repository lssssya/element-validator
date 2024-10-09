import rollupTypescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.ts',
    name: 'hz',
    format: 'es'
  },
  plugins: [
    rollupTypescript({ sourceMap: true })
  ]
}

/*
* 1. build错误问题
* rollup 4 要 node 18 才能打包
* rollup 3 要 node 14 才能打包
*
* 2. 如果在开发过程中引入了 commonjs 规范的包
* @rollup/plugin-commonjs
*
* 3. 如果在开发过程中引入了外部资源
* @rollup/plugin-node-resolve
*
* 4. 如果你要 ts，
* @rollup/plugin-typescript
*
* 5. 不管你有没有 ts 都最好自己写一份声明文件出来
* package.json - "types": "lib/index.d.ts",
*
*  */
