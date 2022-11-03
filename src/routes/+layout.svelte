<script>
	import '../global.postcss';
</script>

<main>
	<slot />
</main>

<style>
	main {
		padding: 2rem 1rem;
		min-height: 100vh;
		display: grid;
		grid-auto-rows: min-content;
	}
</style>
