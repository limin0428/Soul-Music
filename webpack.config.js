let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //指定入口文件
    entry: './src/index.js',
    //指定输出的位置
    output: {
        //输出的路径，必须放一个绝对路径
        path: path.resolve('build'),
        //打包后的文件名
        filename: 'bundle.js'
    },
    //可以配置一个源代码到打包后代码的一个映射，可以在控制看到源代码报错的行数而非bundle.js里的行里
    devtool: 'cheap-module-source-map',
    devServer: {
        //如果请求的路径是以/api开头的话，会由3000这个服务来进行解析处理
        proxy: {
            "/api": "http://localhost:9527"
        }
    },
    //配置模块
    module: {
        //转译的规则 什么样的文件，用什么样的预设来进行转译
        rules: [
            //如果加载的模块的文件名是以.js结尾的话，用babel来加载
            //还要为babel配置三个预设,分别编译es6 es7 react
            {
                test: /\.js$/,
                loader: 'babel-loader',
                //不扫描node_modules里面的文件
                exclude:/node_modules/,
                query: {
                    presets: ["es2015", "stage-0", "react"]
                }
            },
            //如果要加载的模块是以.css结尾的话，使用css style loader
            {test: /\.(css|less)$/, loaders: ["style-loader", "css-loader","less-loader"]},
            {test:/\.(mp3|m4a|mp4)$/,loader:'file-loader'},
            {
                test: /\.(jpg|png|gif|eot|svg|woff|woff2|ttf)$/,
                loader: 'url-loader'
            }
        ]
    },
    //插件
    plugins: [
        //用来自动产出html文件,并且向里面插入打包后的JS文件
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}