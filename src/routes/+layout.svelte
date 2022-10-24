<script>
	import '../global.css';
</script>

<main>
	<slot />
</main>

<style>
	main {
		min-height: 100vh;
		display: grid;
		grid-template-rows: 1fr;
		grid-auto-rows: min-content;
	}
</style>
