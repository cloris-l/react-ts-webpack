const path  = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry:{
        page:'./src/page/index.jsx'
    },
    output:{
        path:path.resolve(__dirname,"../dist"),
        filename:"index.js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
      },
    module:{
        rules:[
            {
                test: /\.(c)ss$/,
                use: [
                  'style-loader',
                  'css-loader',
                //   'resolve-url-loader',
                //   'sass-loader'
                ]
            },
            {
                test:/\.js$/,
                exclude:/(node_module|bower_components)/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.jsx?$/,
                exclude:/(node_module|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:["@babel/preset-env","@babel/preset-react"],
                        plugins:["@babel/plugin-proposal-class-properties"]
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            chunks:['page'],
            template:"./src/template.html"
        })
    ]
}