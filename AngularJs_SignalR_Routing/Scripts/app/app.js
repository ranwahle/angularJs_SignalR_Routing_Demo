(function (angular) {

    var app = angular.module('RoutingDemo', ['ui.router']);
    app.config(['$stateProvider', function($stateProvider)
    {
        $stateProvider.state('state1',
            {
                url: 'screen1',
                templateUrl: 'views/screen1.html'
            }).state('state2',
            {
                url: 'screen2',
                templateUrl: 'views/screen2.html'
            }).state('state3',
            {
                url: 'screen3',
                templateUrl: 'views/screen3.html'
            });
    }]);

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['RoutingDemo']);
    });
}(window.angular));