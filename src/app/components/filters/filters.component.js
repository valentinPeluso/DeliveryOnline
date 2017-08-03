/**
 * @ngdoc component
 * @description Filters component.
 * @example <filters></filters>
 */
angular.module('app.components.filters')
  .component('filters', {
    templateUrl: 'app/components/filters/filters.html',
    controller: filtersComponentCtrl,
    bindings: {
      columns: '<',
      data: '<',
      getDataFiltered: '&'
    }
  });

/* @ngInject */
filtersComponentCtrl.$inject = [
  '_'
];

/**
 * @ngdoc controller
 * @class app.components.filtersComponentCtrl
 * @description Filters component controller.
 */
function filtersComponentCtrl(
  _
) {
  var vm = this;

  this.$onChanges = function (changesObj) {
    if (angular.isDefined(changesObj.columns.currentValue)) {
      vm.columns = changesObj.columns.currentValue;
    }
    if (angular.isDefined(changesObj.data.currentValue)) {
      vm.data = changesObj.data.currentValue;
    }
    activate();
  };

  activate();

  vm.filter = filter;

  /**
   * @name              activate
   * @description       Bootstraps the controller.
   */
  function activate() {
    vm.filters = [];
  }

  /**
   * @name                        filter
   * @description                 Filter vm.data and return data filtered.
   * @param {String} property     Property to use as selector.
   * @param {String} value        Value to filter.
   * @returns {Object}
   */
  function filter(property, value) {
    if (angular.isDefined(property) && angular.isDefined(value)) {
      var dataFiltered = _.filter(vm.data, function (data) {
        return _.includes(data[property], value);
      });
      vm.getDataFiltered({data: dataFiltered});
    }
  }
}
