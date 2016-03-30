
function initMap() {
  // Create a map object and specify the DOM element for display.

    var map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 59.93575, lng: 30.3217536},
      scrollwheel: false,
      zoom: 15,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      disableDefaultUI: true
    });

    var image = "../img/icon-map-marker.svg";
    var myLatLng = new google.maps.LatLng(59.93575,30.3217536);
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      icon: image
    });
}
