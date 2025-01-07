<script lang="ts">
	import Icon from '@iconify/svelte';
	import * as Card from '$lib/components/ui/card';
	import * as Alert from '$lib/components/ui/alert';

	export let grossAnnualIncome;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Obligation TVA</Card.Title>
	</Card.Header>
	<Card.Content class="grid space-y-2">
		{#if $grossAnnualIncome < 36_800}
			<div class="italic">Vos revenus bruts annuels sont inférieurs à 36 800 €</div>
			<div>
				Vous bénéficiez de la <a
					href="https://entreprendre.service-public.fr/vosdroits/F21746"
					class="hover:underline">franchise en base de TVA</a
				>.
			</div>

			<Alert.Root>
				<Icon icon="material-symbols:pending-actions" class="h-4 w-4" />
				<Alert.Description>Rien à faire</Alert.Description>
			</Alert.Root>
		{:else if $grossAnnualIncome <= 254_000}
			<div class="italic">Vos revenus bruts annuels sont compris entre 36 800 € et 254 000 €</div>
			<div>
				Vous êtes soumis au <a
					href="https://entreprendre.service-public.fr/vosdroits/F23566"
					class="hover:underline">régime du réel simplifié</a
				>.
			</div>

			<Alert.Root>
				<Icon icon="material-symbols:pending-actions" class="h-4 w-4" />
				<Alert.Description
					><a
						href="https://entreprendre.service-public.fr/vosdroits/F23566"
						target="_blank"
						class="hover:underline">Déclarer et payer la TVA (second onglet)</a
					></Alert.Description
				>
			</Alert.Root>
		{:else}
			<div class="italic">Vos revenus sont supérieur à 254 000 €</div>

			<div>
				Vous êtes soumis au régime du <a
					href="https://entreprendre.service-public.fr/vosdroits/F23566"
					target="_blank"
					class="hover:underline">réel normal</a
				>.
			</div>

			<Alert.Root>
				<Icon icon="material-symbols:pending-actions" class="h-4 w-4" />
				<Alert.Description
					><a
						href="https://entreprendre.service-public.fr/vosdroits/F23566"
						target="_blank"
						class="hover:underline">Déclarer et payer la TVA (troisième onglet)</a
					></Alert.Description
				>
			</Alert.Root>
		{/if}
	</Card.Content>
</Card.Root>
