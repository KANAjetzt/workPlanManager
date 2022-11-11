<script lang="ts">
	import { onMount } from 'svelte';
	import { get_css_var } from '$lib/get_css_var';
	import Copy from '$comps/icons/Copy.svelte';

	let copy_icon_color: string;

	onMount(() => {
		copy_icon_color = get_css_var('--btn_copy_icon_color');
	});
</script>

<button
	class="icon"
	on:click={(e) => {
		e.preventDefault();
	}}
>
	<Copy fill={`${copy_icon_color}`} />
</button>

<style lang="postcss">
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		border: none;
		background: transparent;
	}
</style>
