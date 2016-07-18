'use strict';

/**
 * @ngdoc function
 * @name myappApp.factory:viewFactory
 * @description
 * # viewFactory
 * Factory of the myappApp
 */
var app = angular.module('myappApp');
app.factory('viewFactory', function($http) {
    return {
        getHotels: function(id) {
            return $http({
                url: 'http://hotelmgmt.mybluemix.net/view/'+id,
                method: 'GET'
            });
        }
    };
});