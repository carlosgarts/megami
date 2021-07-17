import * as THREE from 'three';

//Variables

//Funciones (Creador de texturas)

function Piel() {
	const modelTxRough = new THREE.TextureLoader().load("./assets/textures/model/model_rough.png");
	const modelTxMap = new THREE.TextureLoader().load("./assets/textures/model/model_color_2.png");
	const modelMaterial = new THREE.MeshStandardMaterial( {metalness: 0.8, side: THREE.DoubleSide } );
	modelMaterial.map = modelTxMap;
	modelMaterial.roughnessMap = modelTxRough;
    return modelMaterial;
};
function Cabello() {
    const noiseTx = new THREE.TextureLoader().load("./assets/textures/noise.png");
    const hairTxAlpha = new THREE.TextureLoader().load("./assets/textures/hair/hair_ht_opacity.png");
	const hairTxNormal = new THREE.TextureLoader().load("./assets/textures/hair/hair_ht_normal.png");
	const hairTxBump = new THREE.TextureLoader().load("./assets/textures/hair/hair_ht_depth.png");
	const hairTxAO = new THREE.TextureLoader().load("./assets/textures/hair/hair_ht_ao.png");
	const hairMaterial = new THREE.MeshStandardMaterial( {metalness: 0.4, roughness: 0.5, alphaTest: 0.5, depthTest: true, side: THREE.DoubleSide, vertexColors: true } );
	hairMaterial.alphaMap = hairTxAlpha;
	hairMaterial.normalMap = hairTxNormal;
	hairMaterial.bumpMap = hairTxBump;
	hairMaterial.aoMap = hairTxAO;
	hairMaterial.map = noiseTx;
    return hairMaterial;
};
function Dona() {
	const torMaterial = new THREE.MeshStandardMaterial( { color: 0xF250A9, emissive: 0xF250A9, emissiveIntensity: 5 } );
    return torMaterial;
};
function Vidrio() {
	var video = document.getElementById( 'videotexture' );
	const glassTexture = new THREE.VideoTexture( video );
	const parameters = { color: 0xffffff, map: glassTexture, side: THREE.DoubleSide/* , emissive: 0xffffff, emissiveIntensity: 0.1 */};
	const glassMaterial = new THREE.MeshLambertMaterial( parameters );
	return glassMaterial;
};
function Marco() {
	const marcoTxMap = new THREE.TextureLoader().load("./assets/textures/frame/map.png");
	const marcoTxMetal = new THREE.TextureLoader().load("./assets/textures/frame/metal.png");
	const marcoTxRough = new THREE.TextureLoader().load("./assets/textures/frame/rough.png");
	const marcoMaterial = new THREE.MeshStandardMaterial( {map: marcoTxMap, roughnessMap: marcoTxRough, metalnessMap: marcoTxMetal} );
	return marcoMaterial;
};
function Gold() {
	const goldenMaterial = new THREE.MeshStandardMaterial( {metalness: 0.8, roughness: 0.4, color: 0xcbc5a7 } );
	return goldenMaterial;
};
function Invisible() {

};



export { Piel, Cabello, Dona, Vidrio, Marco, Gold };