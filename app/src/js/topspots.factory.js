(function() {
    'use strict';

    angular
        .module('app')
        .factory('TopSpotsFactory', TopSpotsFactory);

    TopSpotsFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function TopSpotsFactory($http, $q) {
        var service = {
            getTopSpots: getTopSpots
        };
        return service;

        ////////////////

        // Get top spots json data
        function getTopSpots() {
        	var defer = $q.defer();
        	// $http.get('topspots.json').then(
            $http.get('http://localhost:50180/api/TopSpots').then(
        		function(response) {
                    // Return data from source
        			console.log(response.data);
                    defer.resolve(response.data);
        		},
        		function(err) {
                    // Return error
        			console.log(err);
                    defer.reject("An unexpected error occured.");
        		}
      		);
      		return defer.promise;
        }
    }
})();