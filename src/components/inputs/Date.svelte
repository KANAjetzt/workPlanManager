<script lang="ts">
	import { DateInput } from 'date-picker-svelte';
	import './Date.postcss';

	let date: Date | null = null;
</script>

<DateInput
	bind:value={date}
	placeholder={'Date'}
	format={'dd.MM.yyyy'}
	locale={{
		weekdays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
		months: [
			'Januar',
			'Februar',
			'März',
			'April',
			'Mai',
			'Juni',
			'Juli',
			'August',
			'September',
			'Oktober',
			'November',
			'Dezember'
		]
	}}
/>
