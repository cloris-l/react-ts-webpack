const webpack =require('webpack')
const path = require('path')
const HtmlWebpackPlugin  = require("html-webpack-plugin")
module.exports = {
    mode:'development',
    entry:'./src/index.tsx',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].[hash:5]'.js
    },

    devServer:{
        hot:true,
        contentBase:path.resolve(__dirname,'dist'),
        historyApiFallback:{//browerHash  刷新重定向到index.html
            index:'./index.html'
        }
    },
    resolve:{
        extensions:['.ts','.tsx','.js','.json'],
        alias:{
            "@":path.resolve("src")
        }
    },
    module:{
        rules:[
            {
                test: /\.(j|t)sx?$/,//如果要加载的模块是jsx tsx js ts的话
                loader: 'ts-loader',//使用ts-loader进行转译
                options: {
                    transpileOnly: true,//是否只转译
                    //设置自定义转换器,TypeScript 可以将 TS 源码编译成 JS 代码，自定义转换器插件则可以让你定制生成的代码。比如删掉代码里的注释、改变变量的名字、将类转换为函数等等
                    //TypeScript 将 TS 代码编译到 JS 的功能，其实也是通过内置的转换器实现的，从 TS 2.3 开始，TS 将此功能开放，允许开发者编写自定义的转换器。
                    // getCustomTransformers: () => ({
                    //     //ts-import-plugin是为了按需引入antd
                    //     before: [tsImportPluginFactory({
                    //         "libraryName": 'antd',
                    //         "libraryDirectory": "es",
                    //         "style": "css"
                    //     })]
                    // }),//设置编译选项
                    compilerOptions: {
                        module: 'es2015'//模块规范是es2015
                    }
                },
            },
            {
                test: /\.css$/,//css处理顺口
                use: ['style-loader', {//style-loader是把CSS当作一个style标签插入到HTML中
                    loader: 'css-loader',//css-loader是处理CSS中的import 和url
                    options: { importLoaders: 0 }
                }
                // {
                //         loader: 'postcss-loader',//postcss是用来给CSS中根据can i use 网站的数据添加厂商前缀的
                //         options: {
                //             postcssOptions:{
                //                 plugins: [
                //                     require('autoprefixer')
                //                 ]
                //             }
                //         }
                // },
                // {
                //         loader: 'px2rem-loader',//把px自动转成rem
                //         options: {
                //             remUnit: 75,//一个rem代表75px
                //             remPrecesion: 8 //计算精度保留8位小数
                //         }
                // }
                ]
            },
            {
                test: /\.less$/,//处理less
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: { importLoaders: 0 }
                },
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         plugins: [
                    //             require('autoprefixer')
                    //         ]
                    //     }
                    // },
                    // {
                    //     loader: 'px2rem-loader',
                    //     options: {
                    //         remUnit: 75,
                    //         remPrecesion: 8
                    //     }
                    // },
                    'less-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|svg|jpeg)$/,//处理图片,把图片打包到输出目录中
                use: ['url-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'[name].[hash:5].html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}