<script lang="ts">
	import { onMount } from 'svelte';
	import Eye from '$lib/Eye.svelte';

        type Post = {
                title: string;
                date: string;
                summary: string;
                slug: string;
        };

        type SpotifyStatus = {
                status: string;
                nowPlaying: { title: string; artist: string } | null;
                recentTrack: { title: string; artist: string } | null;
        };

        let { data } = $props();
        const posts: Post[] = data.posts;
        const spotify: SpotifyStatus | null = data.spotify ?? null;

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

	onMount(() => {
		document.documentElement.style.removeProperty('--noise-bg');
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

                <div class="spotify-status">
                        <div class="spotify-label">Spotify</div>
                        {#if spotify}
                                <div class="spotify-body">
                                        <div class="status-line">
                                                <span class="status-dot"></span>
                                                <span class="status-text">{spotify.status}</span>
                                        </div>

                                        {#if spotify.nowPlaying}
                                                <div class="track-line">
                                                        <span class="track-label">Now playing</span>
                                                        <span class="track-title">{spotify.nowPlaying.title}</span>
                                                        <span class="track-artist">by {spotify.nowPlaying.artist}</span>
                                                </div>
                                        {:else}
                                                <div class="track-line idle">Nothing playing right now.</div>
                                        {/if}

                                        {#if spotify.recentTrack}
                                                <div class="track-line recent">
                                                        <span class="track-label">Recent</span>
                                                        <span class="track-title">{spotify.recentTrack.title}</span>
                                                        <span class="track-artist">by {spotify.recentTrack.artist}</span>
                                                </div>
                                        {/if}
                                </div>
                        {:else}
                                <div class="spotify-body">
                                        <div class="track-line idle">Spotify status unavailable.</div>
                                </div>
                        {/if}
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
