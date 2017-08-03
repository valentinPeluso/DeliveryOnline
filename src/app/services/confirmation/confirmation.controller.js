/**
 * @ngdoc component
 * @description Grilla component.
 */
angular.module('app.components.grilla')
  .controller('confirmActionController', confirmationController);

/* @ngInject */
confirmationController.$inject = [
  'title',
  'confirmationConstants',
  '$uibModalInstance'
];

/**
 * @ngdoc controller
 * @class confirmationController
 * @description Confirmation controller.
 */
function confirmationController(
  title,
  confirmationConstants,
  $uibModalInstance
) {
  var vm = this;

  vm.confirm = confirm;
  vm.cancel = cancel;

  activate();

  /**
   * @name          activate
   * @description   Bootstraps the controller.
   */
  function activate() {
    vm.title = angular.copy(confirmationConstants[title]);
  }

  /**
   * @name          confirm
   * @description   Confirm action.
   */
  function confirm() {
    $uibModalInstance.close('confirm');
  }

  /**
   * @name          cancel
   * @description   Dismiss the modal.
   */
  function cancel() {
    $uibModalInstance.dismiss('cancel');
  }
}
