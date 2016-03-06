(function () {

  'use strict';

  angular
    .module('starter')
    .factory('notifier', notifier);

  function notifier($log, $ionicPopup) {
    return {
      warning: warning
    };

    function warning(){
      $ionicPopup.alert({
        title: 'Information',
        template: 'No data to show.',
        buttons: [{text: 'Ok',
          type: 'button-positive'}]
      });
    }
  }

}());
