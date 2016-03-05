(function () {
  'use strict';

  angular
    .module('starter')
    .controller('LogsController', LogsController);

  function LogsController($log, restService) {
    var vm = this;

    vm.statuses = [{time: '2016-03-05 15:17:10', message: 'Locked'}, {
      time: '2016-03-05 15:22:15',
      message: 'Unlocked'
    }, {
      time: '2016-03-05 15:25:15',
      message: 'Unlocked'
    }, {
      time: '2016-03-05 15:32:15',
      message: 'Locked'
    }, {
      time: '2016-03-05 15:42:15',
      message: 'Unlocked'
    }];

  }

})();
