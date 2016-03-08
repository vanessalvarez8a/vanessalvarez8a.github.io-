angular.module('furryInnApp').controller('bookNowCtrl', function($scope, $firebaseArray) {

  var ref = new Firebase("https://furryinn.firebaseio.com/booknow");

  $scope.bookings = $firebaseArray(ref);


  $scope.addBooking = function() {
    // console.log($scope.booking);
    $scope.booking.checkin = $scope.booking.checkin.toString();
    $scope.booking.checkout = $scope.booking.checkout.toString();
    $scope.bookings.$add({
      text: $scope.booking
    })
    $scope.booking = {}
  }
// console.log($scope.bookings);
});
