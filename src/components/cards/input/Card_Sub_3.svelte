<script>
	import Btn_Check from '$comps/buttons/Btn_Check.svelte';
	import Input_Text from '$comps/inputs/Text.svelte';
	import Input_Date from '$comps/inputs/Date.svelte';
	import Input_Count from '$comps/inputs/Count.svelte';
	import Card_Main from './Card_Main.svelte';
</script>

<Card_Main bg={3}>
	<div class="inputs">
		<div class="text">
			<Input_Text placeholder={"Name (z.B. Hans Wurst)"}/>
		</div>
	</div>
	<div class="btn_check">
		<Btn_Check />
	</div>
</Card_Main>

<style lang="postcss">
	.inputs {
		display: grid;
		grid-template-columns: max-content max-content;
		grid-template-rows: 1fr 1fr;
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;
		align-items: center;
		padding: 0.75rem 1rem;
	}

	.text {
		width: 15rem;
		grid-row: span 2;
		grid-column: 1 / 3;
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
