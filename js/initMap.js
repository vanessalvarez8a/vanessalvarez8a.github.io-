// window.initMap = function() {
function initMap() {
  var mapDiv = document.getElementById('map');
  var myLatlng = new google.maps.LatLng(25.773491,-80.231337);
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 25.773491, lng: -80.231337},
    zoom: 16
  });
  var contentString = '<div id="content">'+
      '<div id="bodyContent">'+
      '<p><b>Furry Inn</b>, 1 Glen Royal Parkway  Miami, Fl 33125'+
      '</div>'+
      '</div>';
      var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: '1 Glen Royal Parkway Apt 1407 Miami Fl 33125'
  });

  marker.addListener('click', function() {
   infowindow.open(map, marker);
 });
};


// window.initMap = function() {
//   var myLatLng = new google.maps.LatLng(25.773491, -80.231337);
//   var mapOptions = {
//       center: myLatLng,
//       zoom: 16,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//   var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//
// };
