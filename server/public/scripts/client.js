var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    console.log('myApp -- config')
    $routeProvider
        // .when('/home', {
        //     templateUrl: '/views/templates/home.html',
        //     controller: 'LoginController as lc',
        // })
    })

