(function () {

  'use strict';

  angular
    .module('starter')
    .factory('statusesService', statusesService);

  function statusesService($log, $q, restService) {

    var service = {
      getList: getList
    };

    return service;

    function getList() {

      var deferred = $q.defer();

      var statusesList = [];

      restService.callApi('/sender.php', 'statusesList', {}, 'GET').then(successHome);

      function successHome() {
        if (restService.data != undefined) {

          statusesList = restService.data.statusesList;

          deferred.resolve(statusesList);

        } else {
          deferred.reject('No data.');
        }
      }

      return deferred.promise;

    }
  }

}());
