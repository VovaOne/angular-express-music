import angular from 'angular';

import  './../module'

import '../component/table/table-directive'
import './filter/filter-directive'
import '../component/combobox/combobox-directive'
import './music-view-controller'

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