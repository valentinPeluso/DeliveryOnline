/**
 * @ngdoc service
 */
angular.module('app.delivery_page')
  .factory('deliveriesService', deliveriesService);

deliveriesService.$inject = [
  '_'
];

/**
 * @ngdoc controller
 * @class app.delivery_page.deliveriesService
 * @description List deliveries service.
 */
function deliveriesService(
  _
) {
  var deliveries = [];
  var grillaConfig = {};
  var service = {
    getGrillaConfig: getGrillaConfig,
    updateGrillaConfig: updateGrillaConfig,
    getDeliveries: getDeliveries,
    postDelivery: postDelivery,
    getDelivery: getDelivery,
    updateDelivery: updateDelivery
  };

  addMockDeliveries();
  addMockGrillaConfig();

  return service;

  function getGrillaConfig() {
    return grillaConfig;
  }

  function updateGrillaConfig(grillaConfigUpdated) {
    _.merge(grillaConfig, grillaConfigUpdated);
  }

  function postDelivery(delivery) {
    delivery.id = getMockId();
    deliveries.push(delivery);
  }

  function updateDelivery(delivery) {
    var index = _.findIndex(deliveries, function (deliv) {
      return deliv.id === delivery.id;
    });
    _.merge(deliveries[index], delivery);
  }

  function getDeliveries() {
    return deliveries;
  }

  function getDelivery(id) {
    return _.find(deliveries, {id: id});
  }

  function addMockDeliveries() {
    deliveries = [
      {
        id: getMockId(),
        name: 'Nombre 4',
        description: 'Description',
        specialities: 'Especialidades',
        address: 'Calle falsa 2222',
        time: {
          from: 12,
          to: 21
        },
        phone: '221-1111111',
        administrativeContact: {
          name: 'Nombre',
          lastName: 'Apellido',
          phone: '221-4332121',
          email: 'test@gmail.com'
        },
        comercialContact: {
          idemAdministrativeContactCheckbox: false,
          name: 'Nombre',
          lastName: 'Apellido',
          phone: '221-6676677',
          email: 'test@gmail.com'
        }
      },
      {
        id: getMockId(),
        name: 'Nombre 2',
        description: 'Description 2',
        specialities: 'Especialidades 2',
        address: 'Calle falsa 2211',
        time: {
          from: 4,
          to: 8
        },
        phone: '221-2222222',
        administrativeContact: {
          name: 'Nombre',
          lastName: 'Apellido',
          phone: '221-4332121',
          email: 'test@gmail.com'
        },
        comercialContact: {
          idemAdministrativeContactCheckbox: false,
          name: 'Nombre',
          lastName: 'Apellido',
          phone: '221-6676677',
          email: 'test@gmail.com'
        }
      },
      {
        id: getMockId(),
        name: 'Nombre 3',
        description: 'Description 3',
        specialities: 'Especialidades 3',
        address: 'Calle falsa 3344',
        time: {
          from: 15,
          to: 16
        },
        phone: '221-3333333',
        administrativeContact: {
          name: 'Nombre',
          lastName: 'Apellido',
          phone: '221-4332121',
          email: 'test@gmail.com'
        },
        comercialContact: {
          idemAdministrativeContactCheckbox: false,
          name: 'Nombre',
          lastName: 'Apellido',
          phone: '221-6676677',
          email: 'test@gmail.com'
        }
      },
      {
        id: getMockId(),
        name: 'Nombre 1',
        description: 'Description 4',
        specialities: 'Especialidades 4',
        address: 'Calle falsa 3355',
        time: {
          from: 12,
          to: 13
        },
        phone: '221-4444444',
        administrativeContact: {
          name: 'Nombre',
          lastName: 'Apellido',
          phone: '221-4332121',
          email: 'test@gmail.com'
        },
        comercialContact: {
          idemAdministrativeContactCheckbox: false,
          name: 'Nombre',
          lastName: 'Apellido',
          phone: '221-6676677',
          email: 'test@gmail.com'
        }
      }
    ];
  }

  function addMockGrillaConfig() {
    grillaConfig = {
      cantItemsPerPage: 2,
      font: 'Courier',
      columns: [
        {
          title: 'Nombre',
          property: 'name',
          order: false,
          active: true
        },
        {
          title: 'Dirección',
          property: 'address',
          order: true,
          active: true
        },
        {
          title: 'Telefono',
          property: 'phone',
          order: true,
          active: true
        },
        {
          title: 'Descripción',
          property: 'description',
          order: false,
          active: false
        },
        {
          title: 'Especialidades',
          property: 'specialities',
          order: false,
          active: false
        }
      ]
    };
  }
  function getMockId() {
    return (Math.floor((Math.random() * 1000000000) + 1)).toString();
  }
}
