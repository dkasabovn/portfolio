<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
	import { Color } from 'three';

	let container: HTMLElement | null;
	let renderer: THREE.WebGLRenderer | null;

	onDestroy(() => {
		if (container && renderer) {
			container.removeChild(renderer.domElement);
		}
	});

	onMount(() => {
		if (container !== null) {
			renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(container.clientWidth, container.clientHeight);
			renderer.outputEncoding = THREE.sRGBEncoding;
			container?.appendChild(renderer.domElement);

			const scene = new THREE.Scene();
			const target = new THREE.Vector3(0, 0, 0);
			const camera = new THREE.PerspectiveCamera(
				40,
				container.clientWidth / container.clientHeight,
				1,
				100
			);
			// @ts-ignore
			camera.position.set(-3, 0, 0);
			camera.lookAt(target);

			const controls = new OrbitControls(camera, renderer.domElement);
			controls.autoRotate = true;
			controls.autoRotateSpeed *= 3.0;
			controls.minPolarAngle = -Infinity;
			controls.maxPolarAngle = Infinity;
			controls.enableDamping = true;
			controls.target = target;

			const light = new THREE.AmbientLight(0xccff00, 5);
			scene.add(light);

			const dracoLoader = new DRACOLoader();
			dracoLoader.setDecoderPath('js/libs/draco/gltf/');
			const loader = new GLTFLoader();
			loader.setDRACOLoader(dracoLoader);
			loader.load(
				'/pepe.glb',
				function (glb) {
					const model = glb.scene;
					model.position.set(0, -0.3, 0);
					model.scale.set(1, 1, 1);
					scene.add(model);
					animate();
				},
				undefined,
				function (e) {
					console.error(e);
				}
			);

			function animate() {
				requestAnimationFrame(animate);
				controls.update();
				// @ts-ignore
				renderer.render(scene, camera);
			}
		}
	});
</script>

<div id="pepetainer" bind:this={container} class="relative w-full h-full">
	<!-- <svg viewBox="0 0 500 500" class="absolute w-full h-full pointer-events-none">
		<defs>
			<path
				id="circle"
				d="M243.2, 382.4c-74.8,   
		0-135.5-60.7-135.5-135.5s60.7-135.5,135.5-135.5s135.5, 60.7, 135.5,
		135.5 S318, 382.4, 243.2, 382.4z"
			>
				<animateTransform
					attributeName="transform"
					begin="0s"
					dur="30s"
					type="rotate"
					from="360 250 250"
					to="0 250 250"
					repeatCount="indefinite"
				/></path
			>
			<style>
				text {
					font-size: 70px;
					font-family: 'Inter';
					font-weight: 900;
					text-transform: uppercase;
					letter-spacing: 30px;
					/* fill: #ccff00; */
					fill: white;
				}
			</style>
		</defs>
		<text dy="-60" textLength="870">
			<textPath xlink:href="#circle">DANIEL KASABOV-NOUVION</textPath>
		</text>
	</svg> -->
</div>
