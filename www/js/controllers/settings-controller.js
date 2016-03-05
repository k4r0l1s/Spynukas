(function () {
  'use strict';

  angular
    .module('starter')
    .controller('SettingsController', SettingsController);

  function SettingsController($log) {
    var vm = this;

    vm.message = 'Hello World!';

  }

})();
