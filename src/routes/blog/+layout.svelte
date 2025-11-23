<script lang="ts">
	let { children } = $props();
</script>

<div class="blog-shell">
	<main class="post-shell">
		{@render children()}
	</main>
</div>
