<script lang="ts">
	import Icon from '@iconify/svelte';
	import * as Card from '$lib/components/ui/card';
	import * as Alert from '$lib/components/ui/alert';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import { Label } from '$lib/components/ui/label';

	let taxSystem;

	export let grossAnnualIncome;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Obligations fiscales</Card.Title>
	</Card.Header>
	<Card.Content class="grid space-y-2">
		{#if $grossAnnualIncome < 305}
			<div class="italic">Vos revenus brutes annuels sont inférieurs à 305€</div>

			<div>
				Portez le montant de vos revenus bruts annuels à déclarer sur une déclaration complémentaire
				d'impôt sur le revenu n°2042 C pro (ligne 5NP). Vous serez exonéré d'impôt grâce à
				l'abattement minimum de 305€.
			</div>

			<Alert.Root>
				<Icon icon="material-symbols:pending-actions" class="h-4 w-4" />
				<Alert.Description>Mettre "{$grossAnnualIncome}" dans la ligne <b>5NP</b></Alert.Description
				>
			</Alert.Root>
		{:else if $grossAnnualIncome <= 77_700}
			<div class="italic">Vos revenus bruts annuels sont compris entre 305€ et 77 700 €</div>

			<div>
				Vous pouvez opter pour l'un des deux régimes suivants :
				<ul class="list-inside list-disc">
					<li>
						<a
							href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F32919"
							class="hover:underline">Régime micro-BIC (ou spécial BIC)</a
						>: déclarez la totalité de vos revenus bruts sur la déclaration complémentaire n°2042 C
						Pro, ligne 5TB. Un abattement automatique de 50% s'applique sur vos revenus bruts. Vous
						serez donc imposé sur la moitié du total déclaré.
					</li>
					<li>
						<a
							href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F32919"
							class="hover:underline">Régime réel</a
						>: vous déclarez sur le formulaire 2031 SD vos recettes et vos charges.
					</li>
				</ul>
			</div>

			<div class="grid space-y-2">
				<div>Je choisi:</div>
				<RadioGroup.Root bind:value={taxSystem}>
					<div class="flex items-center space-x-2">
						<RadioGroup.Item value="micro-bic" id="regime-micro-bic" />
						<Label for="regime-micro-bic"
							>Régime micro-BIC <span class="italic">(conseillé)</span></Label
						>
					</div>
					<div class="flex items-center space-x-2">
						<RadioGroup.Item value="reel" id="regime-reel" />
						<Label for="regime-reel">Régime réel</Label>
					</div>

					<RadioGroup.Input name="regime" />
				</RadioGroup.Root>

				{#if taxSystem === 'micro-bic'}
					<Alert.Root>
						<Icon icon="material-symbols:pending-actions" class="h-4 w-4" />
						<Alert.Description
							>Mettre "{$grossAnnualIncome}" dans la ligne <b>5TB</b></Alert.Description
						>
					</Alert.Root>
				{:else if taxSystem === 'reel'}
					<Alert.Root>
						<Icon icon="material-symbols:pending-actions" class="h-4 w-4" />
						<Alert.Description>Remplir le formulaire <b>2031 SD</b></Alert.Description>
					</Alert.Root>
				{/if}
			</div>
		{:else}
			<div class="italic">Vos revenus bruts annuels sont compris entre 305€ et 77 700 €</div>

			<div>
				Votre activité est considérée comme professionnelle et vous êtes soumis au <a
					href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F32919"
					class="hover:underline"
				>
					régime réel normal
				</a>. Vous devez déclarez vos revenus sur le formulaire 2031 SD et pouvez déduire les
				charges y-afférents.
			</div>

			<Alert.Root>
				<Icon icon="material-symbols:pending-actions" class="h-4 w-4" />
				<Alert.Description>Remplir le formulaire <b>2031 SD</b></Alert.Description>
			</Alert.Root>
		{/if}
	</Card.Content>
</Card.Root>
