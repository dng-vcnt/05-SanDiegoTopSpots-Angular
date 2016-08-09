var topSpotApp = angular.module('SanDiegoTopSpots', []); 

topSpotApp.factory('factoryData', function($http) {
	return {
		list: function(callback) {
			$http.get('topspots.json').success(callback);
		}
	};
});

topSpotApp.controller('topSpotController', function($scope, factoryData) {
//	$http.get('topspots.json').success(function(data){
	factoryData.list(function(factoryData) {
		$scope.topSpots = factoryData;
	});

		$scope.addLocation = function() {
			// Pushes new location into table
			$scope.topSpots.push($scope.newLocation);
		};

});
