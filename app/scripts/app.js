'use strict';

/**
 * @ngdoc overview
 * @name myappApp
 * @description
 * # myappApp
 *
 * Main module of the application.
 */
angular
    .module('myappApp', [
        'ngRoute'
    ])
    .config(function($routeProvider,$httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/index.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/search', {
                templateUrl: 'views/search.html',
                controller: 'SearchCtrl',
                controllerAs: 'search'
            })
            .when('/results/:searchText/:MaximumResult', {
                templateUrl: 'views/result.html',
                controller: 'ResultCtrl',
                controllerAs: 'result'
            })
            .when('/view/:id', {
                templateUrl: 'views/view.html',
                controller: 'ViewCtrl',
                controllerAs: 'view'
            })            
            .otherwise({
                redirectTo: '/'
            });

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

    });