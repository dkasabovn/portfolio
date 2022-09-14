<script lang="ts">
	import Dropdown from '$lib/Dropdown.svelte';
	import Project from '$lib/Project.svelte';
	import Nav from '../lib/Nav.svelte';

	const experiences = [
		{
			index: 0,
			name: 'AdvancePay',
			details: 'Backend Lead',
			description: `
				<a href="https://www.advancepay.io" target="_blank" style="text-decoration: underline">AdvancePay</a>
				<p>Designed, implemented, and deployed distributed architecture for processing raw data from the YouTube API. 
				Managed a team of two contracted developers by employing agile sprints and Jira to track tickets & epics.</p>
			`,
			technologies: ['KUBERNETES', 'TERRAFORM', 'GO', 'PSQL', 'AWS', 'SQS', 'SQL']
		},
		{
			index: 1,
			name: 'RStudio',
			details: 'DevOps / Infra',
			description: `
					<p>Refactored r-studio-docker-products repository decreasing CI/CD pipeline length by 500 lines, adding 3 new operating systems to daily builds,
					and ensuring that there would be no disruptions to customers.</p>
				`,
			technologies: ['DOCKER', 'GITHUB ACTIONS', 'CI/CD', 'GOSS', 'SHELL', 'LINUX']
		},
		{
			index: 2,
			name: 'Gamma',
			details: 'Co-Founder & Developer',
			description: `
				<a href="https://www.gammatx.app" target="_blank" style="text-decoration: underline">GammaTX</a>
				<p>Developing an application to automate identity access and managment of UT Austin student social events. Part of the Antler VC c/o '22</p>
			`,
			technologies: ['DOCKER', 'GO', 'REDIS', 'FLUTTER', 'REACT', 'HUGO', 'WEBGL', 'SQL']
		},
		{
			index: 3,
			name: 'Kronologic',
			details: 'Backend',
			description: `
				<p>Improved logging systems by adding APM tracking into the core logging library.
				Implemented and deployed distributed service to asynchronously generate large CSVs, decreasing generation time by 3s on average when compared with the previous synchronous solution.
				Created CRUD endpoints for public api using Protobuf, allowing clients to automate client importing en masse.</p>
			`,
			technologies: ['DOCKER', 'GO', 'SQS', 'KUBERNETES', 'DATADOG', 'PROTOBUF', 'SQL']
		},
		{
			index: 4,
			name: 'Slash/AI',
			details: 'Developer',
			description: `
				<a href="https://dkasabovn.github.io/slashai/" target="_blank" style="text-decoration: underline">Slash/AI</a>
				<p>Developed AI that generates cmoments from code using PyTorch, NLTK, and Treesitter; Trained on 40,000+ snippets in Go, Python, Java, and JavaScript. Won 2nd place HackTX GCP '21.</p>
			`,
			technologies: ['PYTHON', 'PYTORCH', 'NLTK', 'TREESITTER', 'GCP']
		},
		{
			index: 5,
			name: 'Audius Enhanced',
			details: 'Developer',
			description: `
				<a href="https://audiusenhanced.com" target="_blank" style="text-decoration: underline">Audius Enhanced</a>
				<p>A tool to calculate artist metrics on the audius platform [deprecated]</p>
			`,
			technologies: ['NODEJS', 'SQL']
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
			Howdy, I'm Daniel Kasabov-Nouvion. I'm a backend lead at AdvancePay.io and a full-time student
			at UT Austin studying ECE. I'm passionate about solving hard problems with clean code. Take a
			look at what keeps me busy and shoot me an
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
			</span> if you have any questions.
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
