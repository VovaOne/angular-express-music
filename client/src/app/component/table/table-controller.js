import angular from 'angular';
import  './../../module'

angular.module('app').controller('TableController', TableController);

function TableController() {
  var vm = this;

  vm.orderColumn = '';
  vm.orderDirectionReverse = false;

  vm.columns = [];
  vm.data = [];
  vm.items = 0;
}