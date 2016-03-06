(function () {

  'use strict';

  angular
    .module('starter')
    .factory('notifier', notifier);

  function notifier($log, $ionicPopup) {
    return {
      warning: warning
    };

    function warning(options){
      $ionicPopup.alert({
        title: 'Information',
        template: options.template,
        buttons: [{text: 'Ok',
          type: 'button-positive'}]
      });
    }
  }

}());
