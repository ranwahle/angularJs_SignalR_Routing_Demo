(function (angular) {
    var service = function () {

        var hub = $.hubConnection().createHubProxy('routingHub'),
            subscribers = [];
        hub.on('changeState', function (newState) {
            subscribers.forEach(function (subscriber) {
                subscriber(newState);
            });


            
        });



        this.subscribe = function (subscriber) {
            subscribers.push(subscriber);
        };

        hub.connection.start();
    };

    angular.module('RoutingDemo').service('autoChageRoute', [service]);
}(window.angular));