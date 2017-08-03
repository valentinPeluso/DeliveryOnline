/**
 * @class lodash
 * @description lodash constant
 */
angular
  .module('lodash')
  .constant('_', angular.injector(['ng']).get('$window')._);
