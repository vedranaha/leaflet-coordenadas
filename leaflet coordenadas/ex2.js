var map = L.map('mapid').setView([41.387120, 2.170004], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var marker = null; //marker exists, but has no type and value

map.on('click', function(e) {

    if(marker) map.removeLayer(marker) //marker!=null
    var center = e.latlng; //map click event object (e) has latlng property-location at which the click occurred

    console.log(center);	
    marker = L.marker(center).bindPopup("Mis coordenadas son:<br><b>Lat: "+e.latlng.lat+" Lng: "+e.latlng.lng+"</b>").addTo(map);
    map.setView(center, 18);
  
    
});
