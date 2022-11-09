<script lang="ts">
	import Card_Sub_0 from '$comps/cards/input/Card_Sub_0.svelte';
	import Card_Sub_1 from '$comps/cards/input/Card_Sub_1.svelte';
	import Card_Sub_2 from '$comps/cards/input/Card_Sub_2.svelte';
	import Card_Sub_3 from '$comps/cards/input/Card_Sub_3.svelte';
	import Welcome from '$comps/Welcome.svelte';

  export let data
	export let plan_data = data.body.data;

	console.log(plan_data);
</script>

<Welcome />

<Card_Sub_0 />
<Card_Sub_1 />
<Card_Sub_2 />
<Card_Sub_3 />