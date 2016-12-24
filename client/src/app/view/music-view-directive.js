import angular from 'angular';

import  './../module'


angular
  .module('app')
  .directive('musicViewDirective', musicViewDirective);

function musicViewDirective() {
  return {
    restrict: 'E',
    template: require('./music-view.html'),
    controller: 'MusicViewController',
    controllerAs: 'musicViewController'
  }
}