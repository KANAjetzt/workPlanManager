<script>
	import Icon from './Icon.svelte';

	export let width = 12;
	export let height = 8;
	export let fill = '#f2e527';
	export let shadow = false;
	export let background = false;
</script>

<Icon {width} {height} {shadow} {background}>
	<svg {width} {height} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M8.99759 0H1.44833C0.756319 0 0.190125 0.531818 0.190125 1.18182V9.45455H1.44833V1.18182H8.99759V0ZM10.8849 2.36365H3.96475C3.27274 2.36365 2.70654 2.89547 2.70654 3.54547V11.8182C2.70654 12.4682 3.27274 13 3.96475 13H10.8849C11.5769 13 12.1431 12.4682 12.1431 11.8182V3.54547C12.1431 2.89547 11.5769 2.36365 10.8849 2.36365ZM3.96473 11.8182H10.8849V3.54547H3.96473V11.8182Z"
			{fill}
		/>
	</svg>
</Icon>
