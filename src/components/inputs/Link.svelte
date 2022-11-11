<script lang="ts">
	import { get_random_string } from '$lib/get_random_string';
	import { onMount } from 'svelte';
	import Btn_Copy from './../buttons/Btn_Copy.svelte';

	export let placeholder: string = 'Link';
	export let value: string;

	let url: string = '';

	onMount(() => {
		url = `${window.location.href}/${get_random_string()}`;
	});
</script>

<label for="link">
	{placeholder}
</label>
<div class="wrapper">
	<input id="link" name="link" type="text" {placeholder} readonly={true} {value} />
	<div class="btn_copy">
		<Btn_Copy />
	</div>
</div>

<style lang="postcss">
	.wrapper {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}

	label {
		color: var(--input_link_label_color);
		font-size: 0.7rem;
		padding-left: 0.1rem;
	}

	input {
		width: 100%;
		padding: 0.5rem 1.75rem 0.5rem 0.75rem;
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		background-color: var(--input_link_bg_color);
		border: none;
		border-radius: 6px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	input::placeholder {
		opacity: 0.8;
	}

	.btn_copy {
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		justify-self: end;
		z-index: 10;
		padding-right: 0.5rem;
		transform: scale(1.4);
	}
</style>
