import L from "leaflet";
import issImage from "../assets/iss.png";

const issIcon = L.icon({
	iconUrl: issImage,
	iconSize: [100, 100],
	iconAnchor: [50, 50],
});

function drawMap(elementId, { latitude, longitude }) {
	const map = L.map(elementId, {
		zoomControl: false,
		boxZoom: false,
		doubleClickZoom: false,
		dragging: false,
		keyboard: false,
		scrollWheelZoom: false,
	}).setView([0, 0], 2);

	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
		attribution: `&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>`,
	}).addTo(map);

	L.marker([latitude, longitude], { icon: issIcon }).addTo(map);

	map.panTo([latitude, longitude], { animate: true, duration: 5 });

	return map;
}

export default drawMap;
