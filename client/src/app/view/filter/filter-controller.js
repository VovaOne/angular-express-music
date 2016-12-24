import angular from 'angular';
import  './../../module'

angular.module('app').controller('FilterController', FilterController);

function FilterController() {
  var vm = this;

  vm.singerFilterData = [{id: 'Jazz', name: 'Джаз'}, {id: 'Rock', name: 'Рок'}];

  vm.filters = [];

  vm.onSingerChange = function (value) {
    addFilter('singer', value);
    vm.onChange({$and: vm.filters})
  };

  vm.onGenreChange = function (value) {
    addFilter('genre', value);
    vm.onChange({$and: vm.filters})
  };

  vm.onYearChange = function (value) {
    addFilter('year', value);
    vm.onChange({$and: vm.filters})
  };


  function addFilter(column, value) {
    vm.filters = vm.filters
      .filter(filter =>filter.name != value.id);
    vm.filters.push({
      [column]: value.id
    });
  }
}