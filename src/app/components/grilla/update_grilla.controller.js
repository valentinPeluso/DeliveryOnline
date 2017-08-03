/**
 * @ngdoc component
 * @description Grilla component.
 * @example <grilla></grilla>
 */
angular.module('app.components.grilla')
  .controller('updateGrillaController', updateGrillaCtrl);

/* @ngInject */
updateGrillaCtrl.$inject = [
  'grillaConfig',
  'deliveriesService',
  '$uibModalInstance'
];

/**
 * @ngdoc controller
 * @class app.components.updateGrillaCtrl
 * @description Grilla component controller.
 */
function updateGrillaCtrl(
  grillaConfig,
  deliveriesService,
  $uibModalInstance
) {
  var vm = this;

  vm.saveGrillaConfig = saveGrillaConfig;
  vm.cancel = cancel;

  activate();

  /**
   * @name          activate
   * @description   Bootstraps the controller.
   */
  function activate() {
    vm.grillaConfig = angular.copy(grillaConfig);
  }

  /**
   * @name          saveGrillaConfig
   * @description   Return the new grilla config.
   */
  function saveGrillaConfig() {
    $uibModalInstance.close(vm.grillaConfig);
  }

  /**
   * @name          cancel
   * @description   Dismiss the modal.
   */
  function cancel() {
    $uibModalInstance.dismiss('cancel');
  }
}
