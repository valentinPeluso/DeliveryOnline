/**
 * @ngdoc component
 * @description Grilla component.
 * @example <grilla></grilla>
 */
angular.module('app.components.grilla')
  .component('grilla', {
    templateUrl: 'app/components/grilla/grilla.html',
    controller: grillaComponentCtrl,
    bindings: {
      data: '<'
    }
  });

grillaComponentCtrl.$inject = [
  '_',
  'deliveriesService',
  '$filter',
  '$state',
  '$uibModal'
];

/**
 * @ngdoc controller
 * @class app.components.grillaComponentCtrl
 * @description Grilla component controller.
 */
function grillaComponentCtrl(
  _,
  deliveriesService,
  $filter,
  $state,
  $uibModal
) {
  var vm = this;

  this.$onChanges = function (changesObj) {
    if (angular.isDefined(changesObj.data.currentValue)) {
      vm.originalData = changesObj.data.currentValue;
      vm.dataFiltered = angular.copy(vm.originalData);
      setData(angular.copy(vm.originalData));
    }
    activate();
  };

  activate();

  vm.orderChanged = orderChanged;
  vm.getDataFiltered = getDataFiltered;
  vm.pageChanged = pageChanged;
  vm.removeItem = removeItem;
  vm.updateItem = updateItem;
  vm.updateGrid = updateGrid;

  function activate() {
    vm.order = {
      property: '',
      reverse: false
    };
    vm.currentPage = 1;
    vm.grillaConfig = deliveriesService.getGrillaConfig();
  }
  function updateGrid() {
    var modalInstance = $uibModal.open({
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'app/components/grilla/update_grilla.html',
      controller: 'updateGrillaController',
      controllerAs: '$ctrl',
      size: 'md',
      resolve: {
        grillaConfig: function () {
          return vm.grillaConfig;
        }
      }
    });

    modalInstance.result.then(function (updatedGrillaConfig) {
      deliveriesService.updateGrillaConfig(updatedGrillaConfig);
      setData(angular.copy(vm.originalData));
    });
  }
  function orderChanged(orderEnabled, property) {
    if (orderEnabled) {
      if (property === vm.order.property) {
        if (vm.order.reverse) {
          vm.order = {
            property: '',
            reverse: false
          };
        } else {
          vm.order.reverse = !vm.order.reverse;
        }
      } else {
        vm.order.property = property;
        vm.order.reverse = false;
      }
    }
    vm.orderData = $filter('orderBy')(vm.dataFiltered, vm.order.property, vm.order.reverse);
    setData(angular.copy(vm.orderData));
  }
  function setData(data) {
    var from = (vm.currentPage - 1) * vm.grillaConfig.cantItemsPerPage;
    var to = from + vm.grillaConfig.cantItemsPerPage;
    vm.data = _.slice(data, from, to);
  }
  function pageChanged() {
    vm.orderData = $filter('orderBy')(vm.dataFiltered, vm.order.property, vm.order.reverse);
    setData(angular.copy(vm.orderData));
  }
  function getDataFiltered(data) {
    vm.dataFiltered = data;
    vm.currentPage = 1;
    vm.orderData = $filter('orderBy')(vm.dataFiltered, vm.order.property, vm.order.reverse);
    setData(vm.orderData);
  }
  function removeItem(id) {
    _.remove(vm.dataFiltered, function (data) {
      return data.id === id;
    });
    _.remove(vm.originalData, function (data) {
      return data.id === id;
    });
    vm.orderData = $filter('orderBy')(vm.dataFiltered, vm.order.property, vm.order.reverse);
    setData(angular.copy(vm.orderData));
  }
  function updateItem(id) {
    $state.go('update-delivery', {id: id});
  }
}
