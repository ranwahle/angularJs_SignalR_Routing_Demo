(function (angular) {

    var controller = function (routingAatoChangeService, $state) {
        routingAatoChangeService.subscribe(function (newState) {
            $state.go(newState);
        });
    };

    angular.module('RoutingDemo').controller('navigationController',
        ['autoChageRoute','$state', controller]);

}(window.angular));