'use strict';

require('angular/angular');

var superheroApp = angular.module('superheroApp', []);

var heroController = superheroApp.controller('heroController', ['$scope', function($scope) {
  $scope.secret = 'Psst.. Did you know Bruce Wayne is Batman?';
}])
