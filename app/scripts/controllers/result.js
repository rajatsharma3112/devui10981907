'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myappApp
 */
angular.module('myappApp').controller('ResultCtrl', ['$scope', '$location', '$routeParams', '$http', 'resultFactory', function($scope, $location, $routeParams, $http, resultFactory) {
	$scope.apptitle = 'UI Case study - Hotel Booking Application';
	$scope.image = 'images/main.jpg';
	$scope.pagetitle = 'Hotel Results';
    $scope.searchText = $routeParams.searchText;
    $scope.MaximumResult = $routeParams.MaximumResult;
    if (typeof $scope.searchText === 'undefined') {
        $scope.searchText = null;
    }
    if (typeof $scope.MaximumResult === 'undefined') {
        $scope.MaximumResult = null;
    }

    resultFactory.getResults($scope.searchText,$scope.MaximumResult).then(function(result) {
        $scope.data = result.data;
    });

    console.log($scope.data);
    $scope.changeResults = function() {
        $location.path('/search');
    };
    $scope.viewHotels = function(id) {
        $location.path('/view/' + id + '');
    };
}]);