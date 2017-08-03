/**
 * @ngdoc component
 * @description Update grilla controller.
 */
angular.module('app.components.grilla')
  .controller('updateGrillaController', updateGrillaCtrl);

/* @ngInject */
updateGrillaCtrl.$inject = [
  'grillaConfig',
  'deliveriesService',
  '$uibModalInstance',
  'confirmationService'
];

/**
 * @ngdoc controller
 * @class app.components.updateGrillaCtrl
 * @description Grilla component controller.
 */
function updateGrillaCtrl(
  grillaConfig,
  deliveriesService,
  $uibModalInstance,
  confirmationService
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
    confirmationService.confirm('updateGrilla').then(function () {
      $uibModalInstance.close(vm.grillaConfig);
    });
  }

  /**
   * @name          cancel
   * @description   Dismiss the modal.
   */
  function cancel() {
    $uibModalInstance.dismiss('cancel');
  }
}
