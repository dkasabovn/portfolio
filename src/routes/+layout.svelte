<script lang="ts">
	import '../app.css';
	import Pepe from '$lib/Pepe.svelte';
</script>

<main class="text-white bg-black">
	<div class="flex flex-col gap-y-20 justify-between items-center w-full min-h-screen bg-black">
		<div class="flex flex-col w-11/12 lg:w-1/2 xl:w-1/3 md:w-3/4">
			<div
				class="flex flex-row justify-between items-center mt-5 text-2xl text-white sm:text-3xl f-inter yellow-green"
			>
				<a
					href="https://drive.google.com/file/d/1h0YVErrcSpJg2EaRhGKCerW7pm4cYbXD/view?usp=sharing"
					target="_blank">RESUME</a
				>
				<a class="w-20 h-20 sm:w-32 sm:h-32 noselect" href="/">
					<Pepe />
				</a>
				<a href="/contact">CONTACT</a>
			</div>
			<slot />
		</div>
		<!-- <div class="bottom-0 left-0 w-full h-10 bg-yellow-green"/> -->
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@900&family=Playfair+Display:ital,wght@0,600;1,600;1,700;1,800&display=swap');
</style>
