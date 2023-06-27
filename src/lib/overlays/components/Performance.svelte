<script lang="ts">
	import { score } from '$lib/stores';
	import { fly } from 'svelte/transition';
	let acc: number;
	$: acc = accDisplay($score?.scoreEvent?.accuracy);

	const accDisplay = (n: number) => {
		if (isNaN(n)) return 100;
		return Math.round(n * 10000) / 100;
	};
</script>

<div transition:fly={{ duration: 200, y: 20, x: 0, delay: 250 }} class="group">
	<span class="text">{$score?.letterGrade() ?? 'SS'}</span>
	<span class="subtext">{acc}%</span>
</div>
<div transition:fly={{ duration: 200, y: 20, x: 0, delay: 200 }} class="group">
	<span class="text">{$score?.scoreEvent?.combo?.toLocaleString() ?? '0'}</span>
	<span class="subtext">Combo</span>
</div>
<div transition:fly={{ duration: 200, y: 20, x: 0, delay: 150 }} class="group">
	<span class="score">{$score?.scoreEvent?.score?.toLocaleString() ?? '1,000,000'}</span>
</div>

<style>
	.group {
		margin: 4px 0 0 0;
	}
	.text {
		display: inline-block;

		font-size: 22px;
		font-weight: 600;
	}

	.subtext {
		display: inline-block;

		font-size: 14px;
		font-weight: 600;
		letter-spacing: 2px;
		text-transform: uppercase;

		opacity: 0.75;
	}
	.score {
		display: block;
		font-size: 34px;
		font-weight: 700;
		letter-spacing: 2px;
	}
</style>
