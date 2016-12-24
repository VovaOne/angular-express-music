import angular from 'angular';

import  './../../module'


import './table.css'

angular
  .module('app')
  .directive('mTable', tableDirective);

function tableDirective() {
  return {
    restrict: 'E',
    template: require('./table.html'),
    controller: 'TableController',
    controllerAs: 'tableController',
    scope: {
      data: '=',
      columns: '=',
      items: '=',
      onPageChange: '=',
      onItemOnPageChange: '='
    },
    bindToController: true
  }
}