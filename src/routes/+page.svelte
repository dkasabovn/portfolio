<script lang="ts">
	import Pepe from '$lib/Pepe.svelte';
	import Project from '$lib/Project.svelte';
	import Nav from '../lib/Nav.svelte';

	const experiences = [
		{
			name: 'RStudio',
			details: 'DevOps / Infrastructure'
		},
		{
			name: 'AdvancePay',
			details: 'Backend Lead / Solutions Architect'
		},
		{
			name: 'Kronologic',
			details: 'Backend Developer'
		},
		{
			name: 'Kickit',
			details: 'Backend Developer'
		}
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- <Nav /> -->
<div class="flex flex-col gap-y-20 justify-between items-center w-full min-h-screen bg-black">
	<div class="flex flex-col w-1/3">
		<div
			class="flex flex-row justify-between items-center mt-5 text-3xl text-white f-inter yellow-green"
		>
			<div>RESUME</div>
			<div class="w-32 h-32">
				<Pepe />
			</div>
			<div>CONTACT</div>
		</div>
		<div class="flex-1 w-full">
			<div class="w-full flex flex-row justify-center py-10">
				<p class="f-code text-white text-justify">
					My name is Daniel Kasabov-Nouvion. I'm working as the backend lead for AdvancePay.io and
					studying ECE at UT Austin. I enjoy solving problems with software and have a variety of
					interests in the field of computing. *Site is in the middle of an upgrade*
				</p>
			</div>
			<div class="flex flex-col w-full gap-y-10">
				<Project
					experience={{
						index: 1,
						name: 'RStudio',
						details: 'DevOps / Infra',
						description:
							"Refactored main docker-products repository to use Justfile's, build 3 new operating systems, and all the while shipping production ready images to real customers.",
						technologies: ['DOCKER', 'GITHUB ACTIONS', 'CI/CD', 'GOSS', 'SHELL', 'LINUX']
					}}
				/>
			</div>
		</div>
		<div />
	</div>
</div>
