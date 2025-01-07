<script lang="ts">
	import Discord from '$lib/components/Discord.svelte';
</script>

<div class="space-y-5">
	<div class="mx-auto text-center text-xs text-gray-500 md:w-1/2">
		Les informations sont fournies à titre <span class="font-bold">indicatif</span> et concernent des
		administrations fiscales et sociales françaises. En cas du moindre doute, rappochez-vous d'un comptable.
	</div>

	<div class="mx-auto text-center text-xs text-gray-500 md:w-1/2">
		Vous remarquez une erreur ou avez une question ? Créez une issue sur <a
			href="https://github.com/PierrickP/pony-obligations-fiscales-sociales"
			target="_blank"
			class="underline hover:no-underline">GitHub</a
		>
		ou rejoinger le serveur
		<a href="https://discord.gg/6ZjyXMu9" target="_blank" class="underline hover:no-underline"
			>Discord</a
		>
	</div>

	<div class="mx-auto md:w-1/2"><Discord></Discord></div>
</div>
