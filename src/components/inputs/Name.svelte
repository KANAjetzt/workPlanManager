<script lang="ts">
	export let placeholder: string = 'Arbeitsplan Name';
</script>

<div class="wrapper">
	<input type="text" {placeholder} />
</div>

<style lang="postcss">
	.wrapper {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}

	input {
		width: 100%;
		padding: 0.5rem 0.75rem;
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		background-color: var(--input_link_bg_color);
		border: none;
		border-radius: 6px;
	}

	input::placeholder {
		opacity: 0.8;
	}
</style>
