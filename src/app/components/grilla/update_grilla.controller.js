/**
 * @ngdoc component
 * @description Grilla component.
 * @example <grilla></grilla>
 */
angular.module('app.components.grilla')
  .controller('updateGrillaController', updateGrillaCtrl);

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

  function activate() {
    vm.grillaConfig = angular.copy(grillaConfig);
  }
  function saveGrillaConfig() {
    $uibModalInstance.close(vm.grillaConfig);
  }
  function cancel() {
    $uibModalInstance.dismiss('cancel');
  }
}
