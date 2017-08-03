/**
 * @ngdoc directive
 * @description Create delivery component.
 * @example <create-delivery></create-delivery>
 */
angular.module('app.delivery_page.update_delivery')
  .component('updateDelivery', {
    templateUrl: 'app/features/delivery_page/create_delivery/create_delivery.html',
    controller: updateDeliveryComponentCtrl,
    bindings: {}
  });

updateDeliveryComponentCtrl.$inject = [
  'deliveriesService',
  '$state',
  '$stateParams'
];

/**
 * @ngdoc controller
 * @class app.delivery_page.updateDeliveryComponentCtrl
 * @description Create delivery component controller.
 */
function updateDeliveryComponentCtrl(
  deliveriesService,
  $state,
  $stateParams
) {
  var vm = this;

  vm.saveDelivery = saveDelivery;

  activate();

  function activate() {
    vm.administrativeData = deliveriesService.getDelivery($stateParams.id);
    if (angular.isUndefined(vm.administrativeData)) {
      $state.go('list');
    }
  }

  function saveDelivery() {
    deliveriesService.updateDelivery(vm.administrativeData);
    $state.go('list');
  }
}
