var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true});
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

var camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1, 3000);

var scene = new THREE.Scene();

var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

var light1 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light1);

//MATERIAL

// var material = new THREE.MeshBasicMaterial({
//     color: 0xff0000,
//     transparent: true,
//     opacity: 0.5,
//     wireframe: true
// });

// var material = new THREE.MeshNormalMaterial({
//     color: 0xff0000,
//     transparent: true,
//     opacity: 1
// });

// var material = new THREE.MeshLambertMaterial({
//     color: 0xf3ffe2,
//     emissive: 0xff0000
// });

var material = new THREE.MeshPhongMaterial({
    color: 0xf3ffe2,
    specular: 0xff0000,
    shininess: 100
});

// Combines Phong and Lambert materials
var material = new THREE.MeshStandardMaterial({
    color: 0xf3ffe2,
    roughness: 0.5,
    metalness: 0.5
});

// GEOMETRY

var geometry = new THREE.BoxGeometry(100, 100, 100);
var mesh = new THREE.Mesh(geometry, material);
mesh.position.z = -1000;
mesh.position.x = -100;
scene.add(mesh);

var geometry2 = new THREE.SphereGeometry(50, 20, 20);
var mesh2 = new THREE.Mesh(geometry2, material);
mesh2.position.z = -1000;
mesh2.position.x = 100;
scene.add(mesh2);

var geometry3 = new THREE.PlaneGeometry(10000, 10000, 100, 100);
var mesh3 = new THREE.Mesh(geometry3, material);
mesh3.rotation.x = -90 * Math.PI / 180;
mesh3.position.y = -100;
scene.add(mesh3);

requestAnimationFrame(render);
function render() {
    
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}