import angular from 'angular';

import './module'

import './view/music-view-directive'

import '../style/app.css';

angular
  .module('app')
  .directive('app', app);

function app() {
  return {
    restrict: 'E',
    template: require('./app.html')
  }
}