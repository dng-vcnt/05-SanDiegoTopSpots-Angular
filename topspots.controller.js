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

        activate();

        ////////////////

        function activate() {
            TopSpotsFactory.getTopSpots().then(
                function(data) {
                    vm.topSpots = data;
                },
                function(error) {
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