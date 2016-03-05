(function () {
  'use strict';

  angular
    .module('starter')
    .controller('SettingsController', SettingsController);

  function SettingsController($log, localStorage) {
    var vm = this;
    vm.timeDisplayed = false;

    init();

    function init() {
      if (localStorage.get('settings')) {
        var settings = JSON.parse(localStorage.get('settings'));
        vm.timeDisplayed = settings.timeDisplayed;
      }
    }

    vm.timeDisplay = timeDisplay;

    function timeDisplay() {
      var timeDisplayed = {timeDisplayed : vm.timeDisplayed};
      localStorage.set('settings', JSON.stringify(timeDisplayed));
    }

  }

})();
