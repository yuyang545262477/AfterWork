var headapp = angular.module('headapp', []);

headapp.controller('TextController', function ($scope) {
	var message = {};
	message.someText = "i love angular";
	$scope.message = message;

});