(function () {
  'use strict';

  angular
    .module('starter')
    .controller('StatusController', StatusController);

  function StatusController($scope, $log, statusesService, notifier) {
    var vm = this;
    vm.initialized = false;
    vm.refresh = refresh;

    getData();

    function getData() {
      statusesService.getList().then(responseHandler);
    }

    function responseHandler(response) {
      if (response != null) {
        vm.lockStatus = response[0].locked;
      } else {
        vm.warning = true;
        notifier.warning();
      }
      vm.initialized = true;
      $scope.$broadcast('scroll.refreshComplete');
    }

    function refresh(){
      getData();
    }

    var beforeEnter = $scope.$on('$ionicView.beforeEnter', function(){
      getData();
    });

    $scope.$on('$destroy', function() {
      beforeEnter();
    });



  }

})();
