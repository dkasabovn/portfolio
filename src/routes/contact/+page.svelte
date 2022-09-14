<script>
	const src = '/phrog.gif';
	let toggled = false;

	const toggle = () => (toggled = !toggled);
</script>

<svelte:head>
	<title>DKN/DEV - Contact</title>
	<meta name="description" content="Contact Daniel Kasabov-Nouvion" />
</svelte:head>

<form
	action="https://formspree.io/f/meqejywb"
	method="POST"
	class="flex flex-col flex-1 gap-y-5 items-center mt-20"
>
	<input
		class="px-2 py-3 w-full text-2xl text-white bg-black border-2 yellow-green f-inter"
		value="Email"
		type="email"
		name="email"
	/>
	<textarea
		class="px-2 py-3 w-full text-xl bg-black border-2 yellow-green f-inter"
		rows="10"
		value="Message"
		name="message"
	/>
	<!-- your other form fields go here -->
	<button class="self-start px-5 py-1 text-3xl text-black f-inter bg-yellow-green" type="submit">Submit</button
	>
</form>
