(function () {
  'use strict';

  angular
    .module('starter')
    .controller('StatusController', StatusController);

  function StatusController($scope, $log, statusesService, notifier, localStorage) {
    var vm = this;
    vm.initialized = false;
    vm.refresh = refresh;



    function getData() {
      statusesService.getList().then(responseHandler);
    }

    function responseHandler(response) {
      if (response != null) {
        vm.lockStatus = response[0].locked;
        vm.lastLocked = response[0].time;
      } else {
        vm.warning = true;
        notifier.warning({template: 'No data to show.'});
      }
      vm.initialized = true;
      $scope.$broadcast('scroll.refreshComplete');
    }

    function refresh() {
      getData();
    }

    var beforeEnter = $scope.$on('$ionicView.beforeEnter', function () {
      getData();
      var settings = JSON.parse(localStorage.get('settings'));
      vm.timeDisplayed = settings.timeDisplayed;
    });

    $scope.$on('$destroy', function () {
      beforeEnter();
    });

  }

})();
