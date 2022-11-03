<script>
	import Icon from './Icon.svelte';

	export let width = 12;
	export let height = 8;
	export let fill = '#f2e527';
	export let shadow = false;
	export let background = false;
</script>

<Icon {width} {height} {shadow} {background}>
	<svg {width} {height} viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M3.81353 7.10067L0.968732 4.30201L0 5.24832L3.81353 9L12 0.946309L11.0381 0L3.81353 7.10067Z"
			{fill}
			fill-opacity="0.54"
		/>
	</svg>
</Icon>
