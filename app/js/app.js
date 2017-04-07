angular.module('testApp', [
    'ngRoute',
    'testApp.ListItems',
    'testApp.Banner',
    'testApp.Service'
])
    
.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $routeProvider
        .when('/', {
            templateUrl: '../component/Service/Service.html'
        })
        .when('/service', {
            templateUrl: '../component/Service/Service.html'
        })
        .otherwise({
            template: 'not found'
        });
});

