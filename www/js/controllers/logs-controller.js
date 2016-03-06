(function () {
  'use strict';

  angular
    .module('starter')
    .controller('LogsController', LogsController);

  function LogsController($scope, $log, statusesService, notifier) {
    var vm = this;
    vm.refresh = refresh;



    function getData() {
      statusesService.getList().then(responseHandler);
    }

    function responseHandler(response) {
      if (response != null) {
        vm.statuses = response;
      }else{
        vm.warning = true;
        notifier.warning({template: 'No data to show.'});
      }
      $scope.$broadcast('scroll.refreshComplete')
    }

    function refresh(){
      statusesService.getList().then(responseHandler);
    }

    var beforeEnter = $scope.$on('$ionicView.beforeEnter', function(){
      getData();
    });

    $scope.$on('$destroy', function() {
      beforeEnter();
    });

  }

})();
