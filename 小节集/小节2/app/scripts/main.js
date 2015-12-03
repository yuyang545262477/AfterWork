function StartUpController($scope) {
	$scope.computeNeeded = function () {
		$scope.needed = $scope.startingEstimate * 10;
	};
	$scope.requestFunding = function () {
		window.alert('sorry');
	};
	$scope.reset = function () {
		$scope.startingEstimate = 0;
	};
}