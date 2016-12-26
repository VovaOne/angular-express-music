import angular from 'angular';

import  './../../module'

angular.module('app').controller('ComboboxController', ComboboxController);

function ComboboxController() {
  var vm = this;

  vm.label = '';
  vm.field = '';
  vm.selected = null;
  vm._model = null;
  vm.data = [];


  vm._onChange = function () {
    vm.onChange({field: vm.field, value: vm._model});
  }
}
