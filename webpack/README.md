#Webpack 简易教程


## 1.单js文件


	//content.js
	module.exports = " webpack is an awesome Tool "; //被引用文件的内容


	//entry.js 入口文件
	document.write(require('./content.js'));

	//终端进入当前目录
	终端: webpack ./entry.js bundle.js //自动生成bundle.js

	//index.html文件
	<!DOCTYPE html>
	<html lang="en">
		<head>
    		<meta charset="UTF-8">
    		<title>WebPackDemoOne</title>
		</head>
		<body>
    		<script src="bundle.js" charset="utf-8"></script>
		</body>
	</html>
	//可以用浏览器察看结果了。

## 2. 单js+css情况


	//style.css
	body {
		background-color:yellow;
	}

	//entry.js 添加一行代码
	require(!style!css！./style.css);

	//保存，在终端输入相同密码，编译一下
	webpack ./entry.js bundle.js

	//失败了，很正常。因为没有安装对应的loader，在终端输入
	npm install --save-dev style-loader css-loader

	//输入上次的代码，编译成功后，可以打开浏览器察看结果了。

## 3.考虑到复用情况,在LittleTwo对LittleOne 进行小范围升级

	//(新建)webpack.config.js
	module.exports = {

		//填写入口文件
		entry:'./entry.js',

		//填写输出文件的信息
		output:{

			//输出文件的地址，此代码表示，就选在本地
			path: './'，

			// 输出文件名称，与index.html 关联的js文件名称保持一致。
			filename: 'bundle.js'
		}
		//加载相应的loader
		module:{
			loaders:[    //数组形式
				{
					test: /\.css$/, loader:'style!css'
				}
			]
		}
	}  //此webpack.config.js的大概意思 检查 entry.js 文件下，如果有关联 .css文件，就执行加载器‘style-loader’,'css-loader'. 将其结果，动态加载到 bundle.js.

	//  终端
	webpack
	//命令行反馈成功，可以用浏览器打开查看效果了.
# 为了适应更多的情况，这里有[更多](http://webpack.github.io/docs/list-of-loaders.html)的loaders







 