<script lang="ts">
	import Icon from '@iconify/svelte';
	import * as Card from '$lib/components/ui/card';
	import * as Alert from '$lib/components/ui/alert';

	export let grossAnnualIncome;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Obligation sociales</Card.Title>
	</Card.Header>
	<Card.Content class="grid space-y-2">
		{#if $grossAnnualIncome < 9_274}
			<div class="italic">Vos revenus bruts sont inférieurs à 9 274 €</div>

			<div>Vous ne serez pas redevable de cotisations sociales.</div>

			<Alert.Root>
				<Icon icon="material-symbols:pending-actions" class="h-4 w-4" />
				<Alert.Description>Rien à faire</Alert.Description>
			</Alert.Root>
		{:else if $grossAnnualIncome <= 77_700}
			<div class="italic">Vos revenus bruts sont compris entre 9 274 € et 77 700 €</div>

			<div>
				Votre activité présente un caractère professionnel et doit être enregistrée. Vous pouvez
				opter pour le statut professionnel le plus avantageux : régime général, micro-entrepreneur
				ou travailleur indépendant.
			</div>
		{:else}
			<div class="italic">Vos revenus bruts sont supérieurs à 77 700 €</div>

			<div>
				Vous devez enregistrer cette activité sur le site <a
					href="https://procedures.inpi.fr/"
					target="_blank"
					class="hover:underline">https://procedures.inpi.fr/</a
				>
			</div>
		{/if}
	</Card.Content>
</Card.Root>
