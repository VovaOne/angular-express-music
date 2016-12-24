import angular from 'angular';

import './module'

import './view/index'

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