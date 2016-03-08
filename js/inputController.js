angular.module('furryInnApp').controller('inputController', function($scope, $firebaseArray) {

  var ref = new Firebase("https://furryinn.firebaseio.com/contactform");

  $scope.messages = $firebaseArray(ref);

  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.message
    })
    $scope.message = {}
  }

});
