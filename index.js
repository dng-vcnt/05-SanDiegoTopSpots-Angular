var app = angular.module('SanDiegoTopSpots', []); 
app.controller('controller',function($scope, $http) {
	$http.get('topspots.json').success(function(data){
		$scope.topSpots = data;
	});
});