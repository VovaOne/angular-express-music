import angular from 'angular';

import  './../../../module'

import './body-controller'
import './body.css'

angular
  .module('app')
  .directive('mTableBody', tableBody);

function tableBody() {
  return {
    restrict: 'E',
    template: require('./body.html'),
    controller: 'BodyController',
    controllerAs: 'bodyController',
    scope: {
      columns: '=',
      data: '=',
      orderColumn: '=',
      orderDirectionReverse: '='
    },
    bindToController: true
  }
}