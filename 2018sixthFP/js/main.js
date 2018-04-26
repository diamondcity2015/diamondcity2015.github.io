//  zoomControl: boolean,
//  mapTypeControl: boolean,
 // scaleControl: boolean,
 // streetViewControl: boolean,
 // rotateControl: boolean,
 // fullscreenControl: boolean
//

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
  	center: {lat: 40.8054491, lng: -73.9654415},
    zoom: 8,
    
    
    //mapTypeControl: true
    //mapTypeControlOptions: {
    //style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
    //mapTypeIds: ['roadmap', 'terrain']
    
    //zoomControl: True,
    //fullscreenControl: True
  });

  var marker = new google.maps.Marker({
    position: {lat: 40.8054491, lng: -73.9654415},
    map: map,
    title: 'Monks Café'
  });
}