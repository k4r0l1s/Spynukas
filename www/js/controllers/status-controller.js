(function () {
  'use strict';

  angular
    .module('starter')
    .controller('StatusController', StatusController);

  function StatusController($log, restService) {
    var vm = this;

    vm.message = 'Welcome!';

    //$log.debug(restService.jsonp('status.json?callback=JSON_CALLBACK'));

    restService.jsonp('status.json?callback=JSON_CALLBACK').then(responseHandler);

    function responseHandler(response) {
      $log.debug('here', response);
    }

  }

})();
