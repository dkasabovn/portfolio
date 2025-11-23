<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>dkn</title>
	<link rel="icon" href="/catman.png" />
</svelte:head>

{@render children()}
