import "./index.css";
import "leaflet/dist/leaflet.css";
import "./lib/render-background";
import fetchIssLocation from "./lib/fetch-iss-location";
import drawMap from "./lib/draw-map";

// Fetch then draw ISS location on screen.
// Update location ever 10 seconds.
async function drawIssLocation() {
	const { latitude, longitude } = await fetchIssLocation();
	const issLocationEl = document.getElementById("iss-location");
	issLocationEl.textContent = `${latitude}, ${longitude}`;
}
drawIssLocation();
setInterval(() => drawIssLocation(), 10000);

const mapEl = document.getElementById("map");
const mapButtonEl = document.getElementById("map-button");
const mapModalEl = document.getElementById("map-modal");

let mapInstance;

// Show and draw map.
mapButtonEl.addEventListener("click", async () => {
	mapModalEl.style.display = "block";

	const { latitude, longitude } = await fetchIssLocation();

	mapInstance = drawMap(mapEl, { longitude, latitude });
});

// Hide and destroy map instance.
mapModalEl.addEventListener("click", () => {
	mapModalEl.style.display = "none";
	mapInstance.off();
	mapInstance.remove();
});
