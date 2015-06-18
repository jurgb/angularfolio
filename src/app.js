var app = angular.module('MPDapp', ['ngMaterial', 'ngRoute', "checklist-model"], function($interpolateProvider) {
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
});
app.config(function($routeProvider, $mdThemingProvider ) {

    $routeProvider
//        .when('/',
//            {
//                controller: 'AngMpdController',
//                templateUrl: './views/login.html'
//            })
//        .when('/signup',
//            {
//                controller: 'AngMpdController',
//                templateUrl: './views/signup.html'
//            })
        .when('/trip',
            {
                controller: 'AngMpdController',
                templateUrl: './views/newtrip.html'
            })
        .when('/results',
            {
                controller: 'AngMpdController',
                templateUrl: './views/destinations.html'
            })
        .when('/profile',
            {
                controller: 'AngMpdController',
                templateUrl: './views/profile.html'
            })
        .when('/confirmed',
            {
                controller: 'AngMpdController',
                templateUrl: './views/confirmed.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/book',
            {
                controller: 'AngMpdController',
                templateUrl: './views/book.html'
            })
        .otherwise({
        redirectTo: '/profile'
      });
    
     $mdThemingProvider.definePalette('mpdPalette', {
        '50': '48bebc', // blue color (accent)
        '100': '131921', // dark blue (sidenav)
        '200': 'efefef', // grey accent
        '300': 'ffffff',
        '400': 'ef5350',
        '500': '48bebc', //used by default
        '600': 'e53935',
        '700': 'd32f2f',
        '800': 'c62828',
        '900': 'b71c1c',
        'A100': '48bebc',
        'A200': '131921',
        'A400': 'efefef',
        'A700': 'd50000',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                            // on this palette should be dark or light
        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
         '200', '300', '500', 'A100'],
        'contrastLightColors': 'light'    // could also specify this if default was 'dark'
    });
    $mdThemingProvider.theme('default')
        .primaryPalette('mpdPalette', {
          'default': '500', // by default use shade 400 from the pink palette for primary intentions
          'hue-1': '50', // use shade 100 for the <code>md-hue-1</code> class
          'hue-2': '100', // use shade 600 for the <code>md-hue-2</code> class
          'hue-3': '300' // use shade A100 for the <code>md-hue-3</code> class
        })

    });