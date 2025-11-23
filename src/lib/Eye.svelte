<script lang="ts">
import { onMount } from 'svelte';

type Props = {
	eyeSrc: string;
	pupilColor: string;
	width: number;
	height: number;
	baseOffsetX?: number;
	baseOffsetY?: number;
	maxMoveX?: number;
	maxMoveY?: number;
	pupilSize?: number;
	pupilShape?: 'square' | 'circle' | 'triangle';
	className?: string;
};

let {
	eyeSrc,
	pupilColor,
	width,
	height,
	baseOffsetX = 0,
	baseOffsetY = 0,
	maxMoveX = 34,
	maxMoveY = 10,
	pupilSize = 18,
	pupilShape = 'square',
	className = ''
}: Props = $props();

let wrapper: HTMLDivElement | null = null;
let offsetX = $state(baseOffsetX);
let offsetY = $state(baseOffsetY);
let lastMove = performance.now();
let raf = 0;
const idleDelay = 1300; // ms before scan starts
let idleTargetX = 0;
let idleTargetY = 0;
let nextSwitch = performance.now() + idleDelay;

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

const handleMove = (event: MouseEvent) => {
	if (!wrapper) return;
		const rect = wrapper.getBoundingClientRect();
		const cx = rect.left + rect.width / 2;
		const cy = rect.top + rect.height / 2;
	const dx = clamp((event.clientX - cx) / 8, -maxMoveX, maxMoveX);
	const dy = clamp((event.clientY - cy) / 8, -maxMoveY, maxMoveY);
	offsetX = baseOffsetX + dx;
	offsetY = baseOffsetY + dy;
	lastMove = performance.now();
	idleTargetX = 0;
	idleTargetY = 0;
	nextSwitch = lastMove + idleDelay;
};

onMount(() => {
	const listener = (event: MouseEvent) => handleMove(event);
	window.addEventListener('mousemove', listener);

	const tick = (now: number) => {
		const idleMs = now - lastMove;
		if (idleMs > idleDelay) {
			if (now >= nextSwitch) {
				idleTargetX = clamp((Math.random() * 2 - 1) * maxMoveX * 0.9, -maxMoveX, maxMoveX);
				idleTargetY = clamp((Math.random() * 2 - 1) * maxMoveY * 0.7, -maxMoveY, maxMoveY);
				nextSwitch = now + 800 + Math.random() * 1200;
			}
			offsetX = baseOffsetX + idleTargetX;
			offsetY = baseOffsetY + idleTargetY;
		} else {
			idleTargetX = 0;
			idleTargetY = 0;
		}
		raf = requestAnimationFrame(tick);
	};

	raf = requestAnimationFrame(tick);

		return () => {
			window.removeEventListener('mousemove', listener);
			if (raf) cancelAnimationFrame(raf);
		};
	});
</script>

<div
	class={`eye-block ${className ?? ''}`}
	bind:this={wrapper}
	style={`width:${width}px; aspect-ratio:${width}/${height};`}
>
	<img class="eye-img" src={eyeSrc} alt="Eye" draggable="false" />
	<div class="pupil-layer">
		<div
			class={`pupil-img ${pupilShape}`}
			style={`transform: translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px)); background:${pupilColor}; width:${pupilSize}px; height:${pupilSize}px;`}
		></div>
	</div>
</div>
