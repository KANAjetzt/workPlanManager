<script lang="ts">
	export let placeholder: string = 'Arbeitsplan Name';
	export let readonly = false;
	export let disabled = false;
</script>

<label for="name">{placeholder}</label>
<div class="wrapper">
	<input id="name" name="name" type="text" {placeholder} {readonly} {disabled} />
</div>

<style lang="postcss">
	.wrapper {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}

	label {
		color: var(--input_name_label_color);
		font-size: 0.7rem;
		padding-left: 0.1rem;
		padding-bottom: 0.4rem;
	}

	input {
		width: 100%;
		padding: 0.5rem 0.75rem;
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		background-color: var(--input_name_bg_color);
		border: none;
		border-radius: 6px;
	}

	input::placeholder {
		opacity: 0.8;
	}
</style>
