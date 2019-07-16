const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  //分离css
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
module.exports={
    entry: './src/index.js',
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(sc|sa|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          publicPath: '../',
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.less$/,
                use: [
                 {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          publicPath: '../',
                        }
                 },
                  'css-loader',
                  'postcss-loader',
                  'less-loader',
                ],
            },
            {
                  test: /\.(png|svg|jpg|gif)$/,
                  use:[
                      {
                          loader: 'file-loader',
                          options:{
                              limit:5000,
                              name: "imgs/[name].[ext]"
                          }
                    }
                  ]
            },
            {
                test: /\.js$/,
                loader: 'happypack/loader?id=happyBabel',
                exclude: /node_modules/
              },
        ]
    },
    plugins:[
        new webpack.HashedModuleIdsPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
          }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash].css",
            chunkFilename: 'css/[id].[hash].css'
          }),
        //打包之前清除文件
        new CleanWebpackPlugin(),
        new HappyPack({
            id: "happyBabel",
            loaders:[{
                loader:"babel-loader?cacheDirectory=true"
            }],
            threadPool: happyThreadPool,
            verbose: true
        })
    ]
}