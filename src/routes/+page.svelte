<script lang="ts">
	import { zod } from 'sveltekit-superforms/adapters';
	import { superForm, defaults } from 'sveltekit-superforms';
	import { intProxy } from 'sveltekit-superforms/client';
	import { incomeSchema } from '$lib/schemas';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import TaxCard from '$lib/TaxCard.svelte';
	import VATCard from '$lib/VATCard.svelte';
	import SocialCard from '$lib/SocialCard.svelte';
	import Discord from '$lib/components/Discord.svelte';

	$: isValid = false;

	const superform = superForm(defaults(zod(incomeSchema)), {
		SPA: true,
		validators: zod(incomeSchema),
		resetForm: false,
		onUpdate({ form }) {
			console.log(form);
			if (form.valid) {
				isValid = true;
			}
			return;
		}
	});

	const { enhance } = superform;
	const grossAnnualIncome = intProxy(superform, 'gross_annual_income');
</script>

<div class="container grid space-y-5">
	<div class="mx-auto py-5 text-center text-4xl font-bold md:w-1/2">
		Adopt A Pony <br />Simulateur d'obligation fiscales et socials
	</div>

	<form use:enhance class="mx-auto md:w-96">
		<Form.Field form={superform} name="gross_annual_income">
			<Form.Control let:attrs>
				<Form.Label>Revenus brut annuel ("Gain totaux")</Form.Label>
				<div class="flex items-stretch">
					<Input
						{...attrs}
						type="number"
						bind:value={$grossAnnualIncome}
						class="rounded-e-none text-right"
					/>
					<div class="flex w-8 items-center justify-center rounded-e-md bg-gray-200 text-center">
						€
					</div>
					&nbsp;
					<Button type="submit">Simuler</Button>
				</div>
			</Form.Control>
			<Form.Description />
			<Form.FieldErrors />
		</Form.Field>
	</form>

	{#if isValid}
		<div class="grid space-y-2">
			<TaxCard {grossAnnualIncome} />

			<VATCard {grossAnnualIncome} />

			<SocialCard {grossAnnualIncome} />
		</div>
	{/if}

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
