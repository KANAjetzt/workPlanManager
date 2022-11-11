<script lang="ts">
	import { appStore } from '../../stores';
	import Check from '$icons/Check.svelte';

	export let border_radius: number = 0;
</script>

<button
	class={`border_radius_${border_radius}`}
	on:click={(e) => {
		if ($appStore.is_plan_created) {
			e.preventDefault();
		}
	}}
>
	<Check fill={'#fff'} background={true} />
</button>

<style lang="postcss">
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		border: none;
		border-radius: 0 3px 3px 0;
		background-color: var(--btn_check_bg_color);
	}

	.border_radius_0 {
		border-radius: 0 3px 3px 0;
	}

	.border_radius_1 {
		border-radius: 3px;
	}
</style>
