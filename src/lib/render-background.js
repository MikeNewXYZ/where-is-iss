import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000,
);
const renderer = new THREE.WebGLRenderer();

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);

const geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.MeshBasicMaterial({
	color: "red",
	wireframe: true,
});
const earth = new THREE.Mesh(geometry, material);

scene.add(earth);

function animate() {
	requestAnimationFrame(animate);

	earth.rotation.x += 0.001;
	earth.rotation.y += 0.001;
	earth.rotation.z -= 0.001;

	renderer.render(scene, camera);
}
animate();
