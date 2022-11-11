<script lang="ts">
	import { default_plan_data } from '../stores';
	import Card_Sub_0 from '$comps/cards/input/Card_Sub_0.svelte';
	import Card_Sub_1 from '$comps/cards/input/Card_Sub_1.svelte';
	import Card_Sub_2 from '$comps/cards/input/Card_Sub_2.svelte';
	import Card_Sub_3 from '$comps/cards/input/Card_Sub_3.svelte';
	import Welcome from '$comps/Welcome.svelte';
</script>

<Welcome message={$default_plan_data.welcome_messages.admin} />

<Card_Sub_0 />
<Card_Sub_1 />
<Card_Sub_2 />
<Card_Sub_3 />
