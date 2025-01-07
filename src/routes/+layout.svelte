<script>
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<div class="container flex min-h-screen flex-col space-y-5 py-5">
	<div class="mx-auto py-5 text-center text-4xl font-bold">
		Adopt A Pony <br />Simulateur d'obligation fiscales et socials
	</div>

	<div class="grow">
		<slot></slot>
	</div>

	<Footer></Footer>
</div>
