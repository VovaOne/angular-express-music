import angular from 'angular';
import  './../../module'

angular.module('app').controller('FilterController', FilterController);

function FilterController() {
  var vm = this;

  vm.filtersData = [];

  vm.filters = [];

  vm.onChangeFilter = function (picked) {
    addFilter(picked.field, picked.value);
    vm.onChange({$and: vm.filters})
  };

  function addFilter(field, value) {
    vm.filters = vm.filters
      .filter(filter => Object.keys(filter)[0] != field);
    vm.filters.push({
      [field]: value
    });
  }
}
