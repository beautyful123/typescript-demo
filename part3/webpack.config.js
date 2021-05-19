const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口文件
  entry: './src/index.ts',
  // 打包文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // 告诉webpack，不用箭头函数
    environment: {
      arrowFunction: false
    }
  },
  // devServer: {
  //   prot: 3333
  // },
  // webpack打包时使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // 匹配ts结尾的文件
        test: /\.ts$/,
        // 使用ts-load解析
        use: [
          'babel-loader',
          {
            loader: 'babel-loader',
            // 选项
            options: {
              // 预设
              presets:[
                  [
                  // 指定环境插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的浏览器版本
                    targets: {
                      "chrome": '88',
                      "ie": '11'
                    },
                    // corejs版本
                    // 使用promise，iE11浏览器没有， 如果不容直接打印Promise,undefined,使用后使用core.js带的promise
                    "corejs": "3",
                    // usage: 按需加载
                    "useBuiltIns": 'usage'
                  }
                ]  
              ]
            }
          },
          'ts-loader'
        ],
        // 不包含的文件
        exclude: /node-modules/
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      // title: '于立伟真帅'
      template: './src/index.html'
    }),
  ]
}