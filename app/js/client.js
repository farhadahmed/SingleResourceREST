'use strict';

require('angular/angular');

var superheroApp = angular.module('superheroApp', []);

var heroController = superheroApp.controller('heroController', ['$scope', function($scope) {
  $scope.secret = 'Psst.. Did you know Bruce Wayne is Batman?';
}])





// var notesApp = angular.module('notesApp', []);

// var notesController = notesApp.controller('notesController', ['$scope', function($scope) {
//   $scope.greeting = 'hello world';
//   $scope.alertGreeting = function() {
//     alert($scope.greeting);
//   };
// }]) //$scope is a service we are injecting into our controller.

// var anotherController = notesApp.controller('anotherController', ['$scope', function($scope) {
//   $scope.anotherValue = 'some other value';
// }])





// var foodTruckApp = angular.module('foodTruckApp', []);

// var truckController = foodTruckApp.controller('truckController', ['$scope', function($scope) {
//   $scope.desc = 'This is an app to rate food trucks';
//   $scope.newFoodTruckName = 'World-Famous Glazed Sushi Tacos';
//   $scope.alertTruck = function() {
//     alert(this.newFoodTruckName);
//   };
// }]);
