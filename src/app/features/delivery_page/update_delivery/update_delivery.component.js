/**
 * @ngdoc directive
 * @description Create delivery component.
 * @example <update-delivery></update-delivery>
 */
angular.module('app.delivery_page.update_delivery')
  .component('updateDelivery', {
    templateUrl: 'app/features/delivery_page/create_delivery/create_delivery.html',
    controller: updateDeliveryComponentCtrl,
    bindings: {}
  });

/* @ngInject */
updateDeliveryComponentCtrl.$inject = [
  'deliveriesService',
  '$state',
  '$stateParams',
  'confirmationService'
];

/**
 * @ngdoc controller
 * @class app.delivery_page.updateDeliveryComponentCtrl
 * @description Update delivery component controller.
 */
function updateDeliveryComponentCtrl(
  deliveriesService,
  $state,
  $stateParams,
  confirmationService
) {
  var vm = this;

  vm.saveDelivery = saveDelivery;

  activate();

  /**
   * @name          activate
   * @description   Bootstraps the controller.
   */
  function activate() {
    vm.administrativeData = deliveriesService.getDelivery($stateParams.id);
    if (angular.isUndefined(vm.administrativeData)) {
      $state.go('list');
    }
  }

  /**
   * @name           updateGrillaConfig
   * @description    Save updated delivery.
   */
  function saveDelivery() {
    confirmationService.confirm('updateDelivery').then(function () {
      deliveriesService.updateDelivery(vm.administrativeData);
      $state.go('list');
    });
  }
}
