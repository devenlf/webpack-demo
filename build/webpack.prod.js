// webpack.prod.js
// 存放 prod 配置
const path = require('path');
// 合并配置文件
const merge = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = merge(common, {
  output: {
    filename: 'js/[name].[contenthash].js', //contenthash 若文件内容无变化，则contenthash 名称不变
    path: path.resolve(__dirname, '../dist')
  },
  module: {},
  plugins: [],
  optimization: {                                        //公用组件提取打包
    runtimeChunk: {
        name: "runtime"
    },
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendor",
                chunks: "all"
            }
        }
    }
  },
  mode: 'production'
});
