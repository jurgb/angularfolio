var app = angular.module('jurgbcms', ['ngMaterial', 'ngRoute'], function($interpolateProvider) {
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
});
app.config(function($routeProvider) {

    $routeProvider
        .when('/',
            {
                controller: 'AngMpdController',
                templateUrl: './views/signup.html'
            })
        .when('/login',
            {
                controller: 'AngMpdController',
                templateUrl: './views/login.html'
            })
        .when('/home',
            {
                controller: 'AngMpdController',
                templateUrl: './views/home.html'
            })
//        .otherwise({
//        redirectTo: '/'
//      });
    });