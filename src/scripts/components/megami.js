import * as THREE from 'three';

import { GUI } from 'three/examples/jsm/libs/dat.gui.module.js';

import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

import { RectAreaLightHelper }  from "three/examples/jsm/helpers/RectAreaLightHelper.js";

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

import Luces from './utils/luces.js';
import { Piel, Cabello, Dona, Vidrio, Marco, Gold } from './utils/materiales.js';
import { desKeys, movKeys } from './utils/keyframes.js';
import { simpleAnimation, scrollingAnimation } from './utils/animations.js';


//VARIABLES//
let camera, scene, renderer, stats;
const clock = new THREE.Clock();
let mixer;
//Models
let lentes;
//screen variables
let width = window.innerWidth;
let height = window.innerHeight;
let isMovile = width < 1000 ? true : false;
//post process variables
const postprocessing = {};
const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
//bloom params
let	params = {
	exposure: 1,
	bloomStrength: 0.5,
	bloomThreshold: 0,
	bloomRadius: 0.1
};

const keyFrDesk = desKeys();
const keyFrMov = movKeys();

//Keyframes

//END VARIABLES//

export default {

	name: 'Megami',
	methods: {
		init: function(element) {
            const container = document.getElementById('displayer');//document.createElement('div');
            //document.body.appendChild( container );

            camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
			if (isMovile == true) {
				camera.position.set(keyFrMov.position.x[0], keyFrMov.position.y[0], keyFrMov.position.z[0]);
				camera.rotation.set(keyFrMov.rotation.x[0], keyFrMov.rotation.y[0], keyFrMov.rotation.z[0]);
				camera.setFocalLength(70.0);
			} else {
				camera.position.set(keyFrDesk.position.x[0], keyFrDesk.position.y[0], keyFrDesk.position.z[0]);
				camera.rotation.set(keyFrDesk.rotation.x[0], keyFrDesk.rotation.y[0], keyFrDesk.rotation.z[0]);
				camera.setFocalLength(50.0);
			}

            scene = new THREE.Scene();

			Luces(scene);

			//Loadin Screen Manager

			//Load Screen
			const loadingManager = new THREE.LoadingManager( () => {
	
				const loadingScreen = document.getElementById( 'load-screen' );
				loadingScreen.classList.add( 'fade-out' );
				
				setTimeout(() => loadingScreen.style.display = "none" , 2000);
				// optional: remove loader from DOM via event listener
				//loadingScreen.addEventListener( 'transitionend', onTransitionEnd );
				
			} );

			//Env Map
	
			const path = './assets/cubemap/';
			const urls = [ path + 'px.png', path + 'nx.png', path + 'py.png', path + 'ny.png', path + 'pz.png', path + 'nz.png' ];
			const reflectionCube = new THREE.CubeTextureLoader().load( urls );

			scene.background = reflectionCube;
		
			//Env Map Fin

			// const gui = new GUI();
			// const light1Folder = gui.addFolder("Cube");
			// light1Folder.add(rectLight.position, "x", -200, 200, 0.01);
			// light1Folder.add(rectLight.position, "y", -200, 200, 0.01);
			// light1Folder.add(rectLight.position, "z", -200, 200, 0.01);
			// light1Folder.add(rectLight.rotation, "x", 0, Math.PI * 2, 0.01);
			// light1Folder.add(rectLight.rotation, "y", 0, Math.PI * 2, 0.01);
			// light1Folder.add(rectLight.rotation, "z", 0, Math.PI * 2, 0.01);
			// light1Folder.open();
			// const light2Folder = gui.addFolder("Light");
			// light2Folder.add(pointerLight.position, "x", -200, 200, 0.01);
			// light2Folder.add(pointerLight.position, "y", -200, 200, 0.01);
			// light2Folder.add(pointerLight.position, "z", -200, 200, 0.01);
			// light2Folder.open();
			// const cameraFolder = gui.addFolder("Camera");
			// cameraFolder.add(camera, "fov", 20, 100, 0.01);
			// cameraFolder.open();

			//MATERIALS

			const torMaterial = Dona();
			const modelMaterial = Piel();
			const hairMaterial = Cabello();
			const glassMaterial = Vidrio();
			const marcoMaterial = Marco();
			const goldMaterial = Gold();

			//GEOMETRY

			const geometry = new THREE.TorusGeometry( 50, 1, 16, 100 );
			const torus = new THREE.Mesh( geometry, torMaterial );
			torus.rotation.set(0, 1.5708, 0);
			torus.position.set(-130.0, 150.0, 0);
			scene.add( torus );

			// const torusFolder = gui.addFolder("Torus");
			// torusFolder.add(torus.position, "x", -200, 200, 0.01);
			// torusFolder.add(torus.position, "y", -200, 200, 0.01);
			// torusFolder.add(torus.position, "z", -200, 200, 0.01);
			// torusFolder.add(torus.rotation, "x", 0, Math.PI * 2, 0.01);
			// torusFolder.add(torus.rotation, "y", 0, Math.PI * 2, 0.01);
			// torusFolder.add(torus.rotation, "z", 0, Math.PI * 2, 0.01);
			// torusFolder.open();

            // MODEL
			const loader = new FBXLoader( loadingManager );
			loader.load( './assets/models/model/model.fbx', function ( object ) {

				// mixer = new THREE.AnimationMixer( object );

				// const action = mixer.clipAction( object.animations[ 0 ] );
				// action.play();

				object.traverse( function ( child ) {

					if ( child.isMesh ) {

						child.castShadow = true;
						child.receiveShadow = true;
						console.log(child);
						if(child.name == "final_hair") {
							child.material = hairMaterial;
						}
						if(child.name == "portfolio_web_girl-base") {
							child.material = modelMaterial;
						}
						// child.material.side = THREE.DoubleSide;
						// child.material.alphaTest = 0.5;
						// child.material.alphaMap = textureAlpha;
						// child.material.normalMap = textureNormal;
						// child.material.bumpMap = textureBump;
					}

				} );

				scene.add( object );

			} );

			loader.load( './assets/models/model/glasses.fbx', function ( object ) {
				object.traverse( function ( child ) {
					if ( child.isMesh ) {
						console.log(child);
						if(child.name == "Vidrio0" || child.name == "Vidrio2" || child.name == "Vidrio3") { /*  */
							child.material = glassMaterial;
						}
						if(child.name == "Marco2") {
							child.material = goldMaterial;
						}
						if(child.name == "Marco3") {
							child.material = marcoMaterial;
						}
						if(child.name == "Vidrio2" || child.name == "Vidrio3" || child.name == "Marco2" || child.name == "Marco3") {
							child.visible = false;
						}
					}
				});
				lentes = object;
				scene.add( lentes );
			});

			renderer = new THREE.WebGLRenderer( { antialias: true } );
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setSize( window.innerWidth, window.innerHeight );
			renderer.shadowMap.enabled = true;
			container.appendChild( renderer.domElement );

			// const controls = new OrbitControls( camera, renderer.domElement );
			// controls.target.set( 0, 100, 0 );
			// controls.update();

			this.initPostprocessing();

			window.addEventListener( 'resize', this.onWindowResize );

			// document.addEventListener('keydown', (event) =>{
			// 	if (event.code == 'KeyO') {
			// 		console.log(camera.position);
			// 		console.log(camera.rotation);
			// 		//console.log(lentes);
			// 		//console.log(lentes.children[0]);
			// 	}
			// 	if (event.code == 'KeyQ') {
			// 		lentes.children[0].visible = true;
			// 		lentes.children[1].visible = true;
			// 		lentes.children[3].visible = false;
			// 		console.log(lentes);
			// 	}
			// 	if (event.code == 'KeyW') {
			// 		simpleAnimation(camera, keyFrDesk, 1);
			// 	}
			// 	if (event.code == 'KeyE') {
			// 		simpleAnimation(camera, keyFrDesk, 0);
			// 	}
			// });

			if (isMovile == true) {
				scrollingAnimation(camera, ".cover", keyFrMov);
			} else {
				scrollingAnimation(camera, ".cover", keyFrDesk);
			}

			// stats
			//stats = new Stats();
			//container.appendChild( stats.dom );
		},
		onWindowResize: function() {
			if (window.innerWidth < 1000) { isMovile = true; } else { isMovile= false; };

			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			
			renderer.setSize( window.innerWidth, window.innerHeight );
		},
		animate: function() {
			//requestAnimationFrame( animate );
			const delta = clock.getDelta();
			//renderer.render( scene, camera );

			postprocessing.composer.render( 0.1 );
			//stats.update();
		},
		changeGlass: function(value) {
			if (value == 'wise') { 	
				lentes.children[0].visible = true;
				lentes.children[1].visible = true;
				lentes.children[2].visible = false;
				lentes.children[3].visible = false;
				lentes.children[4].visible = false;
			}
			if (value == 'bodyguard') { 	
				lentes.children[0].visible = false;
				lentes.children[1].visible = false;
				lentes.children[2].visible = true;
				lentes.children[3].visible = false;
				lentes.children[4].visible = true;
			}
			if (value == 'tenkai') { 	
				lentes.children[0].visible = false;
				lentes.children[1].visible = false;
				lentes.children[2].visible = false;
				lentes.children[3].visible = true;
				lentes.children[4].visible = false;
			}
		},
		initPostprocessing: function() {

			const renderPass = new RenderPass( scene, camera );

			//bloom params
			bloomPass.threshold = params.bloomThreshold;
			bloomPass.strength = params.bloomStrength;
			bloomPass.radius = params.bloomRadius;

			//camera focus
			// const bokehPass = new BokehPass( scene, camera, {
			// 	focus: 75, //1.0
			// 	aperture: 0.025, //0.025
			// 	maxblur: 0.01, //0.01

			// 	width: width,
			// 	height: height
			// } );

			// bokehPass.uniforms[ "focus" ].value = 75;
			// bokehPass.uniforms[ "aperture" ].value = 1.5 * 0.00001;
			// bokehPass.uniforms[ "maxblur" ].value = 0.006;

			const composer = new EffectComposer( renderer );

			composer.addPass( renderPass );
			composer.addPass( bloomPass );
			//composer.addPass( bokehPass );

			postprocessing.composer = composer;
			//postprocessing.bokeh = bokehPass;

		}
	}

}