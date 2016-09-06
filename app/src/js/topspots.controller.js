(function() {
    'use strict';

    angular
        .module('app')
        .controller('TopSpotsController', TopSpotsController);

    TopSpotsController.$inject = ['TopSpotsFactory'];

    /* @ngInject */
    function TopSpotsController(TopSpotsFactory) {
        var vm = this;
        vm.title = 'TopSpotsController';
        vm.addLocation = addLocation;
        vm.topSpots;
        vm.map = { 
            center: { latitude: 32.7151219, longitude: -117.1664042 }, 
            zoom: 12 
        };

        activate();

        ////////////////

        function activate() {
            // Send to factory to get json data
            TopSpotsFactory.getTopSpots().then(
                function(data) {
                    // Set data to variable for use
                    vm.topSpots = data;
                },
                function(error) {
                    // Log error
                    console.log(error);
                }
            );
        }

        function addLocation() {
            // Pushes new location into table
			vm.topSpots.push(vm.newLocation);
		}
    }
})();	