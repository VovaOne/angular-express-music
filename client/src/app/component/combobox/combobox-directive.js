import angular from 'angular';

import  './../../module'

import './combobox-controller'
import './combobox.css'

angular
  .module('app')
  .directive('mCombobox', comboboxDirective);

function comboboxDirective() {
  return {
    restrict: 'E',
    template: require('./combobox.html'),
    controller: 'ComboboxController',
    controllerAs: 'comboboxController',
    scope: {
      label: '=',
      field: '=',
      data: '=',
      onChange: '='
    },
    bindToController: true
  }
}
