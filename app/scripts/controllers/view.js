'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */
angular.module('myappApp').controller('ViewCtrl', ['$scope', '$location', '$routeParams', '$http','viewFactory', function($scope, $location, $routeParams, $http, viewFactory) {
		$scope.apptitle = 'UI Case study - Hotel Booking Application';
		$scope.image = 'images/main.jpg';		
        $scope.id = $routeParams.id;
        viewFactory.getHotels($scope.id).then(function(result) {
			  $scope.data = result.data;
            /* $scope.length = result.data.length;
            for (var i = 0; i < $scope.length; i++) {
                if (result.data[i].id === $scope.id) {
                    $scope.data = result.data[i];
                }
            } */
        });
        $scope.bookHotel = function() {
            $location.path('/add');
        };
    }]);