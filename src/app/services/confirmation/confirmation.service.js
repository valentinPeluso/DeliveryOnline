/**
 * @ngdoc service
 */
angular.module('confirmation')
  .factory('confirmationService', confirmationService);

confirmationService.$inject = [
  '$uibModal'
];

/**
 * @ngdoc controller
 * @class confirmationService
 * @description Confirmation service.
 */
function confirmationService(
  $uibModal
) {
  var service = {
    confirm: confirm
  };

  return service;

  /**
   * @name                    confirm
   * @description             Open model to confirm action.
   * @param {String} title    Title of modal.
   * @return {Promise}
   */
  function confirm(title) {
    var modalInstance = $uibModal.open({
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'app/services/confirmation/confirmation.html',
      controller: 'confirmActionController',
      controllerAs: '$ctrl',
      size: 'xs',
      resolve: {
        title: function () {
          return title;
        }
      }
    });

    return modalInstance.result;
  }
}
