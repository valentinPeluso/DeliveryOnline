angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('list', {
      url: '/',
      component: 'listDeliveries'
    })
    .state('create-delivery', {
      url: '/create',
      component: 'createDelivery'
    })
    .state('update-delivery', {
      url: '/update/:id',
      component: 'updateDelivery'
    });
}
