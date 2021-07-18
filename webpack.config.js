const path =require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports ={

    mode:"development" ,
    entry:'./index.js', 
    output:{
        path:path.resolve(__dirname ,'build')
    } ,
    module:{
        rules:[ 
            {
                test:/\.js?$/ ,
                exclude:/node_modules/,
                use:['babel-loader']
            }  ,
            {
                 test:/\.(s[ca]|c)ss$/,
                use:[ MiniCssExtractPlugin.loader ,'css-loader','sass-loader']

            }
        ]
    }  ,
    plugins:[new HtmlWebpackPlugin({
        template:'./public/index.html'
    }) , new MiniCssExtractPlugin()] ,
    resolve:{
        enforceExtension: false
    } 
   
}