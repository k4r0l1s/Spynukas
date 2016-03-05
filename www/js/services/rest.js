(function () {
  'use strict';

  angular
    .module('starter')
    .factory('restService', restService);

  function restService($log, $http, $q) {
    var rest = {}; // SERVICE VARIABLE
    rest.data = {}; // STORING ALL SUCCESSFUL DATA
    rest.status = {}; // STORING ERROR STATUSES
    var restUrl = 'http://158.129.12.95/~JustinasG';

    rest.callApi = function (url, naming, data, method) {
      var deferred = $q.defer();

      switch (method) {
        case 'POST':
          rest.post(url, data).then(successRequestDataManagement);
          break;
        case 'GET':
          rest.get(url).then(successRequestDataManagement);
          break;
        case 'PUT':
          rest.put(url, data).then(successRequestDataManagement);
          break;
        case 'DELETE':
          rest.delete(url).then(successRequestDataManagement);
          break;
      }
      function successRequestDataManagement(response) {
        if (response.data !== null) {
          rest.data[naming] = response.data;
          deferred.resolve('Got data from ' + naming);
        } else {
          rest.status[naming] = response.data;
          deferred.resolve('No data from ' + naming);
        }
      }

      return deferred.promise;
    };

    rest.post = function (url, data) {
      return $http.post(restUrl + url, data)
        .success(restSuccessHandler)
        .error(restErrorHandler);
    };
    rest.put = function (url, data) {
      return $http.put(restUrl + url, data)
        .success(restSuccessHandler)
        .error(restErrorHandler);
    };
    rest.delete = function (url) {
      return $http.delete(restUrl + url)
        .success(restSuccessHandler)
        .error(restErrorHandler);
    };
    rest.get = function (url) {
      return $http.get(restUrl + url)
        .success(restSuccessHandler)
        .error(restErrorHandler);
    };

    function restSuccessHandler(data, status) {
      var response = null;
      if (status === 200 && data !== null) {
        response = data;
      }
      return response;
    }

    function restErrorHandler(data, status, headers, config, statusText) {
      $log.error('Got error! Status: ' + status + ' status text:' + statusText);
      return data;
    }

    return rest;

  }

}());
