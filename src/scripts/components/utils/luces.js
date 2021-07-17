import {PointLight, PointLightHelper} from 'three';

export default function (scene) {
        const pointerLight = new PointLight( 0xf72585, 2, 150 );
		pointerLight.position.set( 14.59, 155.41, -38.21 );
		scene.add( pointerLight );
		const pointLightHelper = new PointLightHelper( pointerLight, 1 );
		scene.add( pointLightHelper );

		const pointerLightTwo = new PointLight( 0xf72585, 5, 150 );
		pointerLightTwo.position.set( -130.0, 150.0, 0);
		scene.add( pointerLightTwo );
		const pointLightHelperTwo = new PointLightHelper( pointerLightTwo, 1 );
		scene.add( pointLightHelperTwo );

		const pointerLightFront = new PointLight( 0x4cc9f0, 1, 150 );
		pointerLightFront.position.set( 40.12, 128.13, 66.52 );
		scene.add( pointerLightFront );
		const pointLightHelperFront = new PointLightHelper( pointerLightFront, 1 );
		scene.add( pointLightHelperFront );

        // scene.background = new THREE.Color( 0xa0a0a0 );
        // scene.fog = new THREE.Fog( 0xa0a0a0, 200, 1000 );
        // const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
		// hemiLight.position.set( 0, 200, 0 );
		// scene.add( hemiLight );

        //const rectLight = new THREE.RectAreaLight( 0xf72585, 30,  50, 100 );
		//rectLight.position.set( 5, 137.8, 130 );
		//rectLight.rotation.set( 0, 0, 0 );
		//rectLight.lookAt( 0, 0, 0 );
		//scene.add( rectLight );

		//scene.add( new RectAreaLightHelper( rectLight ) );
		///

        // const dirLight = new THREE.DirectionalLight( 0xffffff );
		// dirLight.position.set( 0, 200, 100 );
		// dirLight.intensity = 2.0;
		// dirLight.castShadow = true;
		// dirLight.shadow.camera.top = 180;
		// dirLight.shadow.camera.bottom = - 100;
		// dirLight.shadow.camera.left = - 120;
		// dirLight.shadow.camera.right = 120;
		// dirLight.shadow.bias = -0.003;
		// dirLight.shadow.radius = 8;
		// scene.add( dirLight );
		//helper light
		// const helper = new THREE.DirectionalLightHelper( dirLight, 5 );
		// scene.add( helper );
}