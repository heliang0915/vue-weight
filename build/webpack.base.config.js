/**
 * 基本配置
 */
var path = require('path')
const vueConfig = require('./vue-loader.config');
var ExtractTextPlugin=require("extract-text-webpack-plugin");
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var webpack=require("webpack");

//定义公共路径
var ROOT_PATH = path.resolve(__dirname);
// var APP_PATH=path.resolve(ROOT_PATH,'src/app.js');
var BUILD_PATH=path.resolve(ROOT_PATH,'../dist');

let env=process.env.NODE_ENV||"development";
let isProd=(env!="development");


module.exports = {
    //使用开发者工具
    devtool: isProd? false : '#source-map',
    //打包文件输出目录
    output: {
        path: BUILD_PATH,
        publicPath: '/dist/',
        filename: '[name].[chunkhash].js'
    },
    //解析选项
    resolve: {
        extensions: ['.js', '.vue','.css'], //自动解析限定的扩展名
        modules: [path.resolve(__dirname, '../node_modules')],//解析模块时应该搜索的目录
        alias: { //指定模块的别名 在require和import 引用是可以使用
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../assets'),
            'components': path.resolve(__dirname, '../src/components'),
            'vue':path.resolve(__dirname,'../node_modules/vue/dist/vue.js'),
            'vue-router':path.resolve(__dirname,'../node_modules/vue-router/dist/vue-router.js'),
            'axios':path.resolve(__dirname,'../node_modules/axios/dist/axios.js'),
            'vuex':path.resolve(__dirname,'../node_modules/vuex/dist/vuex.js')
        }
    },
    //告诉webpack如何处理不同的模块
    module: {
        noParse: /es6-promise\.js$/, // avoid webpack shimming process
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory', //启用babel缓存
                exclude: /node_modules/ //指定这些js不用babel-loader解析
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader?limit=1&name=[path][name].[ext]',
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url-loader?importLoaders=1&limit=1000&name=fonts/[name].[hash:7].[ext]'
            },
            {
                test: /\.css$/,
                use: isProd? ExtractTextPlugin.extract({
                    use: 'css-loader?minimize',
                    fallback: 'vue-style-loader'
                }): ['vue-style-loader', 'css-loader']
            }
        ]
    },
    //性能配置
    performance: {
        //此选项根据入口起点的最大体积，控制 webpack 何时生成性能提示  单位字节
        maxEntrypointSize: 300000,
        maxAssetSize: 100000,
        hints: isProd ? 'warning' : false
    },
    plugins: isProd?
        [
            new webpack.optimize.UglifyJsPlugin({
                compress: { warnings: false }
            }),
            new ExtractTextPlugin({
                filename: 'common.[chunkhash].css'
            })
        ]
        :
        [new FriendlyErrorsPlugin()]
}
 
