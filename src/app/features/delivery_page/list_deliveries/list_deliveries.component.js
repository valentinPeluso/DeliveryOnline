/**
 * @ngdoc directive
 * @description List deliveries component.
 * @example <list-deliveries></list-deliveries>
 */
angular.module('app.delivery_page.list_deliveries')
  .component('listDeliveries', {
    templateUrl: 'app/features/delivery_page/list_deliveries/list_deliveries.html',
    controller: listDeliveriesComponentCtrl,
    bindings: {}
  });

/* @ngInject */
listDeliveriesComponentCtrl.$inject = [
  'deliveriesService'
];

/**
 * @ngdoc controller
 * @class app.delivery_page.listDeliveriesComponentCtrl
 * @description List deliveries component controller.
 */
function listDeliveriesComponentCtrl(
  deliveriesService
) {
  var vm = this;

  activate();

  /**
   * @name           activate
   * @description    Bootstraps the controller.
   */
  function activate() {
    vm.deliveries = deliveriesService.getDeliveries();
  }
}
