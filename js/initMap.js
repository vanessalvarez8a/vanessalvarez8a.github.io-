window.initMap = function() {
  var myLatLng = new google.maps.LatLng(25.773491, -80.231337);
  var mapOptions = {
      center: myLatLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

};
