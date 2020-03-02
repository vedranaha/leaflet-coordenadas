var map = L.map('mapid').setView([41.387120, 2.170004], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([41.387196, 2.166055]).addTo(map);

marker.bindPopup("<h3>Restaurant Centfocs</h3><p>Restaurante mediterráneo<br>Carrer de Balmes 16, 08007 Barcelona</p>");