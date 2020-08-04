
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: parseFloat(busLocation[0].LATITUDE),
      lng: parseFloat(busLocation[0].LONGITUDE),
    },
    zoom: 15,
    scrollwheel: false,
   
  });

    const goldStar = {
      path:
        "M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z",
      fillColor: "blue",
      fillOpacity: 0.8,
      scale: .25,
      strokeColor: "gold",
      strokeWeight: 2,
    };
    new google.maps.Marker({
      position: map.getCenter(),
      icon: goldStar,
      map: map,
    });
   



    let contentString = "${bus.VEHICLE}"

     let infowindow = new google.maps.InfoWindow({
       content: contentString,
     });

  for (let i = 0; i < busLocation.length; i++) {
    let marker = new google.maps.Marker({
      position: {
        lat: parseFloat(busLocation[i].LATITUDE),
        lng: parseFloat(busLocation[i].LONGITUDE),
      },
      map: map,
    });
       marker.addListener('click', function() {
    infowindow.open(map, marker);
  
    });
  }
}