angular.module('furryInnApp').directive('myMaps', function() {
  return {
    restrict: 'E',
    template: '<div></div>',
    replace: true,
    link: function(scope, element, attrs) {
      var myLatLng = new google.maps.LatLng(25.773491, -80.231337);
      var mapOptions = {
          center: myLatLng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
      //   window.initMap = function() {
      //   var map = new google.maps.Map(document.getElementById(attrs.id), mapOptions);
      // };
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: '1 Glen Royal Pkwy, Miami, FL 33125'
        });
        marker.setMap(map);
    }

  }
});
