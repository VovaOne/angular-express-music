import angular from 'angular';

import  './../../module'

import './filter-controller'
import './../../component/combobox/combobox-directive'
import './filter.css'


angular
  .module('app')
  .directive('mFilter', filterDirective);

function filterDirective() {
  return {
    restrict: 'E',
    template: require('./filter.html'),
    controller: 'FilterController',
    controllerAs: 'filterController',
    scope: {
      filtersData: '=',
      onChange: '='
    },
    bindToController: true
  }
}
