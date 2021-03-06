import angular from 'angular';

import  './../../../module'

import './footer-controller'
import './footer.css'

angular
  .module('app')
  .directive('mTableFooter', footerDirective);

function footerDirective() {
  return {
    restrict: 'E',
    template: require('./footer.html'),
    controller: 'FooterController',
    controllerAs: 'footerController',
    scope: {
      items: '=',
      onPageChange: '=',
      onItemOnPageChange: '='
    },
    // bindToController: true //$scope.$watch is not working
  }
}