<script lang="ts">
	export let placeholder: string = 'Anzahl';
</script>

<input type="number" name="" id="" {placeholder} />

<style lang="postcss">
	input {
		width: 100%;
		padding: 0.25rem 0.75rem;
		background-color: var(--input_inactive_bg_color);
		border: none;
		box-shadow: 0 0 0 1.5px var(--input_inactive_border_color);
		border-radius: 3px;
	}

	input::placeholder {
		font-weight: bold;
		text-align: center;
	}
</style>
