<script lang="ts">
	export let bg: number = 0;
</script>

<div class={`card bg_${bg}`}>
	<slot />
</div>

<style lang="postcss">
	.card {
		display: grid;
		grid-template-columns: max-content 1fr;
		grid-row-gap: 1rem;
		align-items: center;
		border-radius: 3px;
		filter: drop-shadow(2px 4px 4px var(--card_shadow_color));
		/* box-shadow: 2px 4px 4px var(--card_shadow_color); */
	}

	.bg_0 {
		background-color: var(--card_background_color_sub_0);
		z-index: 10;
	}
	.bg_1 {
		background-color: var(--card_background_color_sub_1);
		z-index: 9;
	}
	.bg_2 {
		background-color: var(--card_background_color_sub_2);
		z-index: 8;
	}
	.bg_3 {
		background-color: var(--primary_color);
		z-index: 7;
	}
</style>
