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
        .otherwise({
        redirectTo: '/'
      });
    });