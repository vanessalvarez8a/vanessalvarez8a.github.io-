angular.module('furryInnApp').controller('mapController', function($scope, $rootScope) {

  $scope.showMap = true;

  $rootScope.$on('$stateChangeStart', function(event, toState) {
    if (toState.name === 'home') {
      $scope.showMap = true;
    } else {
      $scope.showMap = false;
    }
  });



});
