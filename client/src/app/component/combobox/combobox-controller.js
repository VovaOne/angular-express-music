import angular from 'angular';

import  './../../module'

angular.module('app').controller('ComboboxController', ComboboxController);

function ComboboxController() {
  var vm = this;

  vm.label = '';
  vm.selected = null;
  vm._model = null;
  vm.data = [];


  vm._onChange = function () {
    // debugger;
    // var value1;
    // var value = angular.copy(vm._model, value1);
    // var obj = JSON.stringify(value);
    vm.onChange(JSON.parse(vm._model));
  }
}