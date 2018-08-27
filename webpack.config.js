var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const NODE_ENV = "development";

module.exports = {
    stats: {
      hash: false,
      assets: true,
      colors: true,
      timings: true,
      chunks: false,
      version: false,
      children: false,
      chunkModules: false
    },
    devtool: "source-map",
    context: path.join(__dirname, "src"),
    entry: {
        main: "./scripts/index.jsx"
    },

    output: {
        path: path.join(__dirname, "public"),
        filename: "js/[name].js",
        publicPath: './../'//for images
    },

    resolve: {
       extensions: [".js", ".jsx"]
    },

    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                use: ["babel-loader", "eslint-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: [
                    {loader: "css-loader"},
                    {loader: "sass-loader"},
                    {loader: "autoprefixer-loader"}
                  ]
                })
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000, // Convert images< 8kb to base64 strings
                        name: 'images/[name].[ext]'
                    } 
                }]
            },
            /*{
                test: /\.(jpe?g|gif|png|woff2|eot|svg|woff|ttf)$/,
                loader: "file?emitFile=false&name=[path][name].[ext]"
            },*/
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css", { allChunks: true }),
        new webpack.DefinePlugin({
          NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ]
};