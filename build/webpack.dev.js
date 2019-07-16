const merge = require('webpack-merge')
const common = require('./webpack.base.js');
const path = require('path');

module.exports = merge(common,{
    devtool: 'inline-source-map',
    devServer: {
        contentBase:'./dist' //虚拟目录 (内存中存在)
    },
    output: {
        filename: 'js/[name].[hash].js', //每次保存hash都会发生变化
        path:path.join(__dirname,'../dist')
    },
    module:{},
    mode:'development'
})