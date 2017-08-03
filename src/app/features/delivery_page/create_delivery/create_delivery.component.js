/**
 * @ngdoc directive
 * @description Create delivery component.
 * @example <create-delivery></create-delivery>
 */
angular.module('app.delivery_page.create_delivery')
  .component('createDelivery', {
    templateUrl: 'app/features/delivery_page/create_delivery/create_delivery.html',
    controller: createDeliveryComponentCtrl,
    bindings: {}
  });

/* @ngInject */
createDeliveryComponentCtrl.$inject = [
  'deliveriesService',
  '$state'
];

/**
 * @ngdoc controller
 * @class app.delivery_page.createDeliveryComponentCtrl
 * @description Create delivery component controller.
 */
function createDeliveryComponentCtrl(
  deliveriesService,
  $state
) {
  var vm = this;

  vm.saveDelivery = saveDelivery;

  activate();

  /**
   * @name         activate
   * @description  Bootstraps the controller.
   */
  function activate() {
    vm.administrativeData = {
      administrativeContact: {},
      comercialContact: {}
    };
  }

  /**
   * @name           updateGrillaConfig
   * @description    Save new delivery.
   */
  function saveDelivery() {
    deliveriesService.postDelivery(vm.administrativeData);
    $state.go('list');
  }
}
