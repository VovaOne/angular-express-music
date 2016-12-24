import angular from 'angular';

import  './../../module'

import './filter.css'

angular
  .module('app')
  .directive('mFilter', filterDirective);

function filterDirective() {
  return {
    restrict: 'E',
    transclude: true,
    template: require('./filter.html'),
    controller: 'FilterController',
    controllerAs: 'filterController',
    scope: {
      onChange: '='
    },
    bindToController: true
  }
}