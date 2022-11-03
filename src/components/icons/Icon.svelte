<script lang="ts">
	export let width;
	export let height;
	export let shadow = false;
	export let background = false;

	function handle_style(): string {
		let style = '';

		if (shadow) {
			style = `${style} shadow`;
		} else if (background) {
			style = `${style} background`;
		}

		return style;
	}
</script>

<div class={handle_style()}>
	<slot />
</div>

<style>
	.shadow {
		filter: drop-shadow(var(--shadow-1));
	}

	.background {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 100%;
		background-color: rgba(255, 255, 255, 0.1);
		width: 26px;
		height: 26px;
	}
</style>
