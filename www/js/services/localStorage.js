(function () {

  'use strict';

  angular
    .module('starter')
    .factory('localStorage', localStorage);

  /** @ngInject */
  function localStorage($window, $log) {

    return {
      set: function (key, value) {
        try {
          $window.localStorage[key] = value;
        }
        catch (err) {
          $log.debug('localStorage.set (utils) ', err);
        }
      },
      get: function (key, defaultValue) {
        try {
          var rez = $window.localStorage[key] || defaultValue;
        }
        catch (err) {
          $log.debug('localStorage.get (utils) ', err);
        }
        return rez;
      },
      setObject: function (key, value) {
        try {
          $window.localStorage[key] = angular.toJson(value);
        }
        catch (err) {
          $log.debug('localStorage.setObject (utils) ', err);
        }
      },
      getObject: function (key) {
        try {
          var rez = angular.fromJson($window.localStorage[key] || '{}') || {};
        }
        catch (err) {
          $log.debug('localStorage.getObject (utils) ', err);
        }
        return rez;
      },
      setArray: function (key, value) {
        try {
          $window.localStorage[key] = angular.toJson(value);
        }
        catch (err) {
          $log.debug('localStorage.setObject (utils) ', err);
        }
      },
      getArray: function (key) {
        try {
          var rez = angular.fromJson($window.localStorage[key] || '[]') || [];
        }
        catch (err) {
          $log.debug('localStorage.getObject (utils) ', err);
        }
        return rez;
      },
      clear: function () {
        try {
          return $window.localStorage.clear();
        }
        catch (err) {
          $log.debug('localStorage.clear (utils) ', err);
        }
      },
      removeItem: function (key) {
        if ($window.localStorage.getItem(key) != null || typeof $window.localStorage.getItem(key) != 'undefined') {
          try {
            var rez = $window.localStorage.removeItem(key);
          }
          catch (err) {
            $log.debug('localStorage.removeItem (utils) ', err);
            return false;
          }
          return rez;
        } else {
          return false;
        }
      }
    }

  } // localStorage

}());
