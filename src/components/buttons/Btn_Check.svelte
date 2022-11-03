<script>
	import Check from '$icons/Check.svelte';
</script>

<button>
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
</style>
