'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('MainCtrl',  ['$scope',function ($scope) {
	  $scope.apptitle = 'UI Case study - Hotel Booking Application';
	  $scope.pagetitle = 'Welcome to UI case study for Hotel Booking';
	  $scope.description = 'This sample demonstrates how to use AngularJS and Bootstrap to develop a Single Page Application.';
	  $scope.desctitle = 'The key features illustrated in this sample include:';
	  $scope.image = 'images/main.jpg';
	  $scope.contents = [
                    { message: 'AngularJS as MV* Framework' },
                    { message: 'Bootstrap as CSS Framework' },
                    { message: 'Consumption of REST API hosted on Bluemix' },
                    { message: 'Project using Yeoman-based generator-angular generator for scaffolding' },
                    { message: 'Jasmine for Unit testing with PhantomJS and Karma as test runner' }
                ];
	  $scope.searchcasestudy = 'Start your case study experience';
	  console.log($scope);
  }]);
