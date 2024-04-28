<script lang="ts">
	import Dropdown from '$lib/Dropdown.svelte';
	import Project from '$lib/Project.svelte';
	import Nav from '../lib/Nav.svelte';

	const experiences = [
		{
			index: 999,
			name: 'Texas UCF',
			details: 'Director',
			description: `
				<a href="https://www.texasucf.org/" target="_blank" style="text-decoration: underline">UCF</a>
				<p>Resident Nerd @ Texas UCF</p>
			`,
			technologies: ['PY', 'RUST', 'FTX']
		},
		{
			index: 0,
			name: 'IMC Trading',
			details: 'Software Engineering',
			description: `
				<a href="https://www.imc.com/" target="_blank" style="text-decoration: underline">IMC</a>
				<p>Incoming Software Engineer @ IMC</p>
			`,
			technologies: ['JAVA', 'CPP']
		},
		{
			index: 1,
			name: 'ARM',
			details: 'Systems Research',
			description: `
				<a href="https://www.arm.com/" target="_blank" style="text-decoration: underline">ARM</a>
				<p>Investigated the impact of CXL-memory latency on various applications, created a runtime tool to estimate impact, and tested function offload as a possible solution</p>
			`,
			technologies: ['LINUX', 'C++', 'ARM ASM', 'C', 'CXL', 'PYTHON']
		},
		{
			index: 2,
			name: 'Channelcrawler.com',
			details: 'Co-owner',
			description: `
				<a href="https://channelcrawler.com/" target="_blank" style="text-decoration: underline">Channelcrawler</a>
				<p>Designed, implemented, and deployed distributed architecture for processing raw data from the YouTube API.</p>
			`,
			technologies: ['KUBERNETES', 'TERRAFORM', 'GO', 'PSQL', 'AWS', 'SQS', 'SQL']
		},
		{
			index: 3,
			name: 'RStudio',
			details: 'DevOps / Infra',
			description: `
					<p>Refactored r-studio-docker-products repository decreasing CI/CD pipeline length by 500 lines, adding 3 new operating systems to daily builds,
					and ensuring that there would be no disruptions to customers.</p>
				`,
			technologies: ['DOCKER', 'GITHUB ACTIONS', 'CI/CD', 'GOSS', 'SHELL', 'LINUX']
		},
		{
			index: 4,
			name: 'Kronologic',
			details: 'Backend',
			description: `
				<p>Improved logging systems by adding APM tracking into the core logging library.
				Implemented and deployed distributed service to asynchronously generate large CSVs, decreasing generation time by 3s on average when compared with the previous synchronous solution.
				Created CRUD endpoints for public api using Protobuf, allowing clients to automate client importing en masse.</p>
			`,
			technologies: ['DOCKER', 'GO', 'SQS', 'KUBERNETES', 'DATADOG', 'PROTOBUF', 'SQL']
		}
	];

	const copyEmailToClipboard = () => {
		navigator?.clipboard?.writeText('dkasabovn@gmail.com');
	};
</script>

<svelte:head>
	<title>DKN/DEV</title>
	<meta name="description" content="Daniel Kasabov-Nouvion. Developer @ Austin, TX" />
</svelte:head>

<!-- <Nav /> -->

<div class="flex-1 w-full">
	<div class="flex flex-col justify-center pt-10 w-full">
		<p class="text-justify text-white f-code">
			Howdy, I'm Daniel Kasabov-Nouvion. I'm a full time ECE Student @ UT Austin. I'll be working at IMC Trading this summer and Citadel in the fall.
			Interested in anything low level. Take a
			look at what I've done and shoot me an
			<span on:click={copyEmailToClipboard} class="cursor-pointer hover:border-b-2"
				>email <svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="inline-block w-4 h-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
					/>
				</svg>
			</span> if you have any questions. <a href="https://www.linkedin.com/in/seungkeun-lee/" target="__blank">SeungKeun #1</a>
		</p>
	</div>
	<div class="py-10">
		<Dropdown options={['EXPERIENCES']} />
	</div>
	<div class="flex flex-col gap-y-10 mb-10 w-full">
		{#each experiences as experience, i}
			<Project {experience} />
		{/each}
	</div>
</div>
