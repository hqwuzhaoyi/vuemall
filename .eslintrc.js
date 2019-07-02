// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
   'semi': ['error', 'always'],
   // 把默认的eslintrc 代码风格 格式关闭
   'indent': 'off',
   // 用vue定义我们的代码风格 中间的2*baseIndent的值 代码空几格
   'vue/script-indent': ['error', 2, {
     'baseIndent': 1
   }],
   // 函数括号之前的空格 error
   // anonymous 匿名函数总是要空格
   // named 有名字的函数不要空格
   // asyncArrow 异步的箭头函数要空格
   'space-before-function-paren': ['error', {
     'anonymous': 'always',
     'named': 'never',
     'asyncArrow': 'always'
   }]
  }
}
