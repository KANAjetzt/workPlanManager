<script>
	import Btn_Check from '$comps/buttons/Btn_Check.svelte';
	import Input_Text from '$comps/inputs/Text.svelte';
	import Input_Date from '$comps/inputs/Date.svelte';
	import Input_Count from '$comps/inputs/Count.svelte';
</script>

<div class="card">
	<div class="inputs">
		<div class="text">
			<Input_Text />
		</div>
		<div class="date">
			<Input_Date />
		</div>
		<div class="count">
			<Input_Count />
		</div>
	</div>
	<div class="btn_check">
		<Btn_Check />
	</div>
</div>

<style lang="postcss">
	.card {
		display: grid;
		grid-template-columns: max-content 1fr;
		grid-row-gap: 1rem;
		align-items: center;
		border-radius: 3px;
		background-color: var(--primary_color);
		box-shadow: 2px 4px 4px var(--card_shadow_color);
	}

	.inputs {
		display: grid;
		grid-template-columns: max-content max-content;
		grid-template-rows: 1fr 1fr;
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;
		align-items: center;
		padding: 1rem;
	}

	.text {
		width: 9rem;
		grid-column: 1 / 2;
		grid-row: 1 / 2;
	}

	.date {
		grid-column: 1 / 2;
		grid-row: 2 / 3;
	}

	.count {
		width: 5rem;
		grid-column: 2 / 3;
		grid-row: 1 / 3;
	}

	.btn_check {
		width: 100%;
		height: 100%;
	}
</style>
