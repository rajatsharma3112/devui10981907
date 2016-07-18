'use strict';

/**
 * @ngdoc function
 * @name myappApp.factory:resultFactory
 * @description
 * # resultFactory
 * Factory of the myappApp
 */
var app = angular.module('myappApp');
app.factory('resultFactory', function($http) {
    return {
        getResults: function(searchString, maxResults) {
            return $http({
                url: 'http://hotelmgmt.mybluemix.net/results/' + searchString +  '/' + maxResults,
                method: 'GET'
            });
        }
    };
});