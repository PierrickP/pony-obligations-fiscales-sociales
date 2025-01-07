<script lang="ts">
	import { onMount } from 'svelte';
	import { zod } from 'sveltekit-superforms/adapters';
	import { superForm, defaults } from 'sveltekit-superforms';
	import { intProxy } from 'sveltekit-superforms/client';
	import { page } from '$app/stores';
	import { incomeSchema } from '$lib/schemas';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import TaxCard from '$lib/TaxCard.svelte';
	import VATCard from '$lib/VATCard.svelte';
	import SocialCard from '$lib/SocialCard.svelte';

	$: isValid = false;

	const superform = superForm(defaults(zod(incomeSchema)), {
		SPA: true,
		validators: zod(incomeSchema),
		resetForm: false,
		onUpdate({ form }) {
			if (form.valid) {
				isValid = true;
			}
			return;
		}
	});

	const { enhance } = superform;
	const grossAnnualIncome = intProxy(superform, 'gross_annual_income');

	onMount(() => {
		const total = $page.url.searchParams.get('total');

		if (total) {
			grossAnnualIncome.set(total);
			superform.submit();
		}
	});
</script>

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
				<div class="flex w-12 items-center justify-center rounded-e-md bg-gray-200 text-center">
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
