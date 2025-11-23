<script lang="ts">
	import { onMount } from 'svelte';
	import Eye from '$lib/Eye.svelte';

	type Post = {
		title: string;
		date: string;
		summary: string;
		slug: string;
	};

	let { data } = $props();
	const posts: Post[] = data.posts;

	type EyeConfig = {
		id: number;
		eyeSrc: string;
		color: string;
		className: string;
		offsetX: number;
		offsetY: number;
		shape: 'square' | 'circle' | 'triangle';
	};

	const eyes: EyeConfig[] = [
		{
			id: 1,
			eyeSrc: '/eye_1.png',
			color: 'red',
			className: 'eye-1',
			offsetX: 4,
			offsetY: -2,
			shape: 'triangle'
		},
		{
			id: 2,
			eyeSrc: '/eye_2.png',
			color: 'lime',
			className: 'eye-2',
			offsetX: -3,
			offsetY: -2,
			shape: 'circle'
		},
		{
			id: 3,
			eyeSrc: '/eye_3.png',
			color: 'blue',
			className: 'eye-3',
			offsetX: 5,
			offsetY: -2,
			shape: 'square'
		}
	];

	const perlin = (width: number, height: number) => {
		const grad: { x: number; y: number }[][] = [];
		for (let y = 0; y <= height; y++) {
			grad[y] = [];
			for (let x = 0; x <= width; x++) {
				const angle = Math.random() * Math.PI * 2;
				grad[y][x] = { x: Math.cos(angle), y: Math.sin(angle) };
			}
		}

		const dot = (gx: number, gy: number, x: number, y: number) => gx * x + gy * y;
		const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);

		const get = (x: number, y: number) => {
			const x0 = Math.floor(x);
			const x1 = x0 + 1;
			const y0 = Math.floor(y);
			const y1 = y0 + 1;

			const sx = fade(x - x0);
			const sy = fade(y - y0);

			const n00 = dot(grad[y0][x0].x, grad[y0][x0].y, x - x0, y - y0);
			const n10 = dot(grad[y0][x1].x, grad[y0][x1].y, x - x1, y - y0);
			const n01 = dot(grad[y1][x0].x, grad[y1][x0].y, x - x0, y - y1);
			const n11 = dot(grad[y1][x1].x, grad[y1][x1].y, x - x1, y - y1);

			const ix0 = n00 + sx * (n10 - n00);
			const ix1 = n01 + sx * (n11 - n01);
			return ix0 + sy * (ix1 - ix0);
		};

		const canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		const ctx = canvas.getContext('2d');
		if (!ctx) return '';
		ctx.imageSmoothingEnabled = false;
		const image = ctx.createImageData(width, height);

		const bayer = [
			[0, 8, 2, 10],
			[12, 4, 14, 6],
			[3, 11, 1, 9],
			[15, 7, 13, 5]
		];

		const bias = 0.65; // pushes more white space

		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				const nx = (x / width) * 24;
				const ny = (y / height) * 24;
				const v = (get(nx, ny) + 1) / 2;
				const threshold = Math.min(1, (bayer[y % 4][x % 4] + 0.5) / 16 + bias);
				const band = 0.02; // thin bands per channel
				const idx = (y * width + x) * 4;

				if (v > threshold + band * 2) {
					// blue
					image.data[idx] = 0;
					image.data[idx + 1] = 0;
					image.data[idx + 2] = 255;
				} else if (v > threshold + band) {
					// green
					image.data[idx] = 0;
					image.data[idx + 1] = 255;
					image.data[idx + 2] = 0;
				} else if (v > threshold) {
					// red
					image.data[idx] = 255;
					image.data[idx + 1] = 0;
					image.data[idx + 2] = 0;
				} else {
					// white
					image.data[idx] = 255;
					image.data[idx + 1] = 255;
					image.data[idx + 2] = 255;
				}

				image.data[idx + 3] = 255;
			}
		}

		ctx.putImageData(image, 0, 0);
		return canvas.toDataURL();
	};

	onMount(() => {
		const url = perlin(1600, 1600);
		if (url) {
			document.documentElement.style.setProperty('--noise-bg', `url(${url})`);
		}
	});
</script>

<div class="page">
	<header class="hero">
		<div class="eyes-row">
			{#each eyes as eye (eye.id)}
				<Eye
					eyeSrc={eye.eyeSrc}
					pupilColor={eye.color}
					width={200}
					height={120}
					pupilSize={44}
					baseOffsetX={eye.offsetX}
					baseOffsetY={eye.offsetY}
					pupilShape={eye.shape}
					className={`eye-${eye.id}`}
				/>
			{/each}
		</div>
	</header>

	<section class="section">
		<div class="section-header">
			<h2 class="underlined">Work</h2>
		</div>

		<div class="work-grid">
			<div class="work-row">
				<span class="company">Optiver</span>
				<span class="role">D1 HW/SW</span>
			</div>
			<div class="work-row">
				<span class="company">IMC Trading</span>
				<span class="role">Hardware</span>
			</div>
			<div class="work-row">
				<span class="company">Stealth Startup</span>
				<span class="role">Founder / Eng</span>
			</div>
			<div class="work-row">
				<span class="company">Citadel</span>
				<span class="role">Software</span>
			</div>
			<div class="work-row">
				<span class="company">IMC Trading</span>
				<span class="role">Software</span>
			</div>
			<div class="work-row">
				<span class="company">Arm</span>
				<span class="role">Engineering</span>
			</div>
			<div class="work-row">
				<span class="company">RStudio</span>
				<span class="role">Software</span>
			</div>
		</div>
	</section>

	<section class="section">
		<div class="section-header">
			<h2 class="underlined">Blog</h2>
		</div>

		<div class="blog-grid">
			{#each posts as post}
				<a class="blog-card" href={`/blog/${post.slug}`}>
					<span class="blog-date">{post.date}</span>
					<span class="blog-title">{post.title}</span>
					<p>{post.summary}</p>
				</a>
			{/each}
		</div>
	</section>

	<footer class="footer">
		<div class="section-header">
			<h2 class="underlined">Contact</h2>
		</div>
		<span class="contact-link">dkasabovn (at) gmail (dot) com</span>
	</footer>
</div>
