'use strtic'
/*
 * eslint https://cloud.tencent.com/developer/doc/1078
 * eslint-plugin-vue https://eslint.vuejs.org/rules/
 * eslint-plugin-* https://www.npmjs.com/
 * .eslintrc.*
 * 解析器会自动找.eslintrc.*的文件 优先.js
 */

module.exports = {
  // env环境 支持ES6全局变量 自动启用es6-
  env: {
    browser: true, // 浏览器全局变量-
    node: true, // node.js 全局变量与范围-
    es6: true // es6功能-
  },
  // 指定全局 value 值 有 true: 可覆盖使用 false: 不可覆盖使用-
  globals: {
    HJSDK: true,
    location: true
  },
  // 扩展配置文件-
  // vue/recommended 报告常见问题-
  // vue/essential 代码检验-
  extends: ['plugin:vue/recommended', 'plugin:vue/essential'],
  // 配置插件 也可以 配置在package.json 中 -
  plugins: ['import', 'vue'],
  // parserOptions 支持ES6语法-
  parserOptions: {
    parser: 'babel-eslint', // npm模块用作解析器-
    ecmaVersion: 7, // ECMAScript 的版本-
    sourceType: 'module', // 代码位于ECMAScript中的模块中-
    ecmaFeatures: {
      // 配置想要使用的语言功能
      jsx: true,
      modules: true
    }
  },
  /* 
* 配置规则 对象-
* "off" || 0 - 关闭规则
* "warn" || 1 - 将规则打开为警告（不影响退出代码）
* "error" || 2 - 将规则打开为错误（触发时退出代码为1）

*/
  rules: {
    // import 引用规则-
    'import/no-extraneous-dependencies': 0, // 禁止使用无依赖的包-
    'import/extensions': 0, // 确保在导入路径中一致使用文件扩展名-
    'import/no-unresolved': 0, // 确保导入指向可以解析的文件/模块-
    'no-underscore-dangle': 1, // 不允许使用_开头 eg: _this
    'prefer-destructuring': 0, // es6 解构
    'arrow-body-style': 0, // 是否在箭头函数体的周围使用大括号 eg: () => {}
    'space-before-function-paren': [2, 'never'], // 函数括号前是否加空格 eg: fn a()
    'prefer-const': 0, // let关键字声明的变量，但在初始分配后从未重新分配变量-
    'no-unused-expressions': [
      // 使用对程序状态没有影响的使用 -
      0,
      {
        // 允许短路 eg: a&&a() if(0) 0
        allowShortCircuit: true
      }
    ],

    'no-empty': [
      // 空语句块-
      2,
      {
        // 允许空的catch-
        allowEmptyCatch: true
      }
    ],
    camelcase: 0, // 变量名规范-
    'default-case': 0, // switch 语句 要使用default-
    'no-undef': 0, // 未声名的变量-
    'no-case-declarations': 0, // 访问变量提升-
    'no-script-url': 0, // 对于url 的处理-
    semi: 0, // 是否使用分号-
    'no-new': 0, // 禁止使用new-
    'eol-last': 0, // 非空文件中跟踪换行符-
    'no-unused-vars': 1, // 未使用的变量和方法-
    'global-require': 0, // 调用的require 必须放在顶层 类似es6 的 import -
    'no-unneeded-ternary': 0, // 不允许使用三元运算符-
    'no-nested-ternary': 1, // 不允许嵌套三元-
    'max-len': [2, 400], // 最大行的长度-
    'no-return-assign': 0, // 使用 return -
    // 解析模板中的语法错误-
    'vue/no-parsing-error': [
      2,
      {
        'x-invalid-end-tag': false
      }
    ],
    quotes: [2, 'single'], // 引号规则-
    'x-invalid-end-tag': 0,
    'eslint-plugin-vue': 0,
    'dot-notation': 1, // 使用点来访问对象 a.b a[b]
    'no-param-reassign': 0, // 赋值给函数参数 建议重新声明新变量 eg: fn a(val) {val = 3}
    'func-names': 0, // 全名函数规则-
    'no-useless-escape': 0, // 转义字符-
    'vue/singleline-html-element-content-newline': 0, // 标签单行模式-
    'vue/html-self-closing': 0, // 标签闭合配置-
    // 强制使用驼峰-
    'vue/camelcase': 0,
    // 属性命名规则忽略-
    'vue/component-name-in-template-casing': [
      0,
      'PascalCase' | 'kebab-case',
      {
        registeredComponentsOnly: true
        // ignores: []
      }
    ],
    'vue/require-default-prop': 0,
    // 强制 配置 kebab-case
    'vue/attribute-hyphenation': [
      0,
      {
        ignore: []
      }
    ],
    // 属性折行-
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 20, // 默认为1行一个-
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  }
}
