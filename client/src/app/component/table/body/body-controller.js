import angular from 'angular';

import  './../../../module'

angular.module('app').controller('BodyController', BodyController);

BodyController.$inject = ['$scope'];

function BodyController($scope) {
  var vm = this;

  vm.columns = [];
  vm.data = [];
  vm.orderColumn = '';
  vm.orderDirectionReverse = false;

}