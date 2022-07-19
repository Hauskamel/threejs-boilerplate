import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "lil-gui"

import fragmentShader from "./shaders/fragment.glsl"
import vertexShader from "./shaders/vertex.glsl"


/**
 * Scene
 */
const scene = new THREE.Scene();


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


/**
 * Controls
 */
const controls = new OrbitControls(camera, renderer.domElement)


/**
 * Mesh
 */
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;


/**
 * animate Function
 */
function animate() {
    requestAnimationFrame( animate );

    controls.update();

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
}
animate();