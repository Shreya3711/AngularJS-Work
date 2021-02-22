var checker = angular.module('App',[]);

checker.controller('Control', function($scope) {
	$scope.str='';
	
	$scope.out="Default";
	$scope.message = function() {
		if(!$scope.str ||  $scope.str.length==0) {
			$scope.out = "Please enter data first";
			return;
		} 
		const list= $scope.str.split(',');
		if(list.length<=3) {
			$scope.out = "Enjoy!"
		} else {
			$scope.out = "Too much!"
		}
	}
});

