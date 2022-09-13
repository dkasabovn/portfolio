<script lang="ts">
	import { slide } from 'svelte/transition';

	type Experience = {
		index: number;
		name: string;
		details: string;
		technologies: string[];
		description: string
	};

	export let experience: Experience;
	let isOpen = false;

	const toggle = () => (isOpen = !isOpen);
</script>

<div class="text-white f-code">
	<p>{'[/>'} {experience.index.toString().padStart(3, '0')}</p>
	<p
		class={isOpen
			? 'text-3xl pl-5 text-black bg-yellow-green transition-all'
			: 'text-3xl pl-5 text-white transition-all'}
	>
		{experience.name} &mdash; {experience.details}
	</p>
	<button
		class={isOpen ? 'pl-5 transition-all' : 'pl-5 yellow-green transition-all'}
		on:click={toggle}>READ MORE &#8628;</button
	>
	{#if isOpen}
		<div class="pt-10 pl-5 flex flex-col gap-y-10" transition:slide={{ duration: 300 }}>
			<p class="text-xl yellow-green">{experience.technologies.join(" ")}</p>
			<p class="text-xl text-justify">
				{experience.description}
			</p>
		</div>
	{/if}
</div>
