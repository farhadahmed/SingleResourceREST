'use strict';

require('angular/angular');

var superheroApp = angular.module('superheroApp', []);

var heroController = superheroApp.controller('heroController', ['$scope', function($scope) {
  $scope.secret = 'Psst.. Did you know Bruce Wayne is Batman?';
  $scope.newHeroName = 'Ant Man';

// var heroController = superheroApp.controller('heroController', ['$scope', '$http', function($scope, $http) {
//   $scope.secret = 'Psst.. Did you know Bruce Wayne is Batman?';

//   $scope.newSuperhero = 'Placeholder';

//   // $scope.heroes = [];
//   // $scope.errors = [];

//   // $scope.create = function(hero) {
//   //   $http.post('/api/data', hero)
//   //     .then(function(res) {
//   //       $scope.heroes.push(res.data);
//   //       hero = null;
//   //     }, function(res) {
//   //       console.log(res.data);
//   //       $scope.errors.push(res.data)
//   //     });
//   // };
// }]);






//var truckController = foodTruckApp.controller('truckController', ['$scope', function($scope) {
//  $scope.desc = 'This is an app to rate food trucks';
//  $scope.newFoodTruckName = 'World-Famous Glazed Sushi Tacos';
//  $scope.alertTruck = function() {
//    alert(this.newFoodTruckName);
//  };
}]);
