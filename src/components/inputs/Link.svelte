<script lang="ts">
	import Btn_Copy from './../buttons/Btn_Copy.svelte';

  export let placeholder : string = 'Link'
</script>

<div class="wrapper">
	<input type="text" {placeholder} readonly={true} />
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

	.btn_copy {
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		justify-self: end;
		z-index: 10;
		padding-right: 0.5rem;
    transform: scale(1.4);
	}
</style>
