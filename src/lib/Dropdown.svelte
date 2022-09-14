<script lang="ts">
import { each } from "svelte/internal";

	import { slide } from "svelte/transition"

	export let options: string[];
	let isOpen = false;
	let selectedOption = 0

	const toggle = () => (isOpen = !isOpen);
</script>

<div class="relative w-full text-white">
	<button class="w-full text-center text-black f-inter bg-yellow-green" on:click={toggle}>
		&#8623; &mdash; {options[selectedOption]} &mdash; &#8623;
	</button>
	{#if isOpen}
		<div class="w-full" transition:slide={{duration: 100}}>
			{#each options as option, i}
				<p class="w-full text-center text-white f-inter">{i !== selectedOption ? option : ""}</p>
			{/each}
		</div>
	{/if}
</div>