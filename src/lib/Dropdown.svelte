<script lang="ts">
import { each } from "svelte/internal";

	import { slide } from "svelte/transition"

	export let options: string[];
	let isOpen = false;
	let selectedOption = 0

	const toggle = () => (isOpen = !isOpen);
</script>

<div class="relative text-white w-full">
	<button class="f-inter text-black bg-yellow-green w-full text-center" on:click={toggle}>
		&#8623; &mdash; {options[selectedOption]} &mdash; &#8623;
	</button>
	{#if isOpen}
		<div class="w-full" transition:slide={{duration: 100}}>
			{#each options as option}
				<p class="text-white f-inter text-center w-full">{option}</p>
			{/each}
		</div>
	{/if}
</div>