'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */
angular.module('myappApp').controller('SearchCtrl', ['$scope', '$location', function($scope, $location) {
		$scope.apptitle = 'UI Case study - Hotel Booking Application';
		$scope.image = 'images/main.jpg';
		$scope.pagetitle = 'Search Hotels';		
		$scope.searchstring = 'Search String:';
		$scope.maximumresults = 'Maximum results:';
        $scope.searchText = 'India';
        $scope.MaximumResult = '5';
        $scope.findHotels = function() {
            $location.path('/results/' + $scope.searchText + '/' + $scope.MaximumResult + '');
        };
    }]);