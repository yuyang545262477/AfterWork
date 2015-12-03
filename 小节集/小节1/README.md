#小节1－一个基础的Angular应用结构。

## HTML

	html ng-app="myapp"
	body ng-controller = "MyAppController"
		p {{someText}}

## JS

	var myapp = angular.module("myapp",[]) // 定义ng-app

	myapp.controller('MyAppController',function($scope){  //定义controller
		$scope.someText = "hello world.";	//定义Controller的函数
	});

## 输出结果
	"hello world".
