import angular from 'angular';

import  './../../../module'

import './header-controller'
import './header.css'

angular
  .module('app')
  .directive('mTableHeader', tableHeader);

function tableHeader() {
  return {
    restrict: 'E',
    template: require('./header.html'),
    controller: 'HeaderController',
    controllerAs: 'headerController',
    scope: {
      columns: '=',
      orderColumn: '=',
      orderDirectionReverse: '='
    },
    bindToController: true
  }
}