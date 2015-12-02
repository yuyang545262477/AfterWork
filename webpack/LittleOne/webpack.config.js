//编写webpack的配置文件
var path = require("path");

module.exports = {
    entry: './entry.js',//演示单入口文件
    output:{
        path: path.join(_dirnames,'out'),//打包输出的路径
        filename: 'bundle.js',//输出文件名
        publicPath:"./out/" //html文件的引用路径。
    }
};