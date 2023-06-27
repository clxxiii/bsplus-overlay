<script lang="ts">
	import { score, map } from '$lib/stores';

	let album_url: string;
	let time: number;
	let duration: number;
	let radius = 30;

	let progress: SVGCircleElement;

	$: time = $score?.scoreEvent?.time;
	$: duration = $map?.duration;
	$: album_url = coverUrl($map?.coverRaw);

	$: progressDistance(time);

	const progressDistance = (n: number) => {
		const circumference = Math.PI * 2 * 30;
		const percentage = n / (duration / 1000);

		const offset = circumference - percentage * circumference;
		if (progress) progress.style.strokeDashoffset = `${offset}px`;
	};

	const timeDisplay = (n: number) => {
		const minutes = Math.floor(n / 60);
		const seconds = Math.floor(n) % 60;

		return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
	};

	const coverUrl = (s: string) => {
		if (!s) return '';
		return 'data:image/png;base64,' + s;
	};
</script>

<img src={album_url} alt="" />

<svg width="90" height="90">
	<rect width="90" height="90" class="darken" />
	<circle cx="45" cy="45" r={radius} class="remaining" />
	<circle bind:this={progress} cx="45" cy="45" r={radius} class="progress" />
</svg>
<div class="progress-container">
	<span class="progress-text">{timeDisplay(time)}</span>
</div>

<style>
	img {
		width: 90px;
		height: 90px;
	}
	svg {
		position: absolute;
		top: 0;
		left: 0;
		transform: rotate(-90deg);
	}

	.progress-container {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;

		width: 90px;
		height: 90px;
	}

	.darken {
		fill: black;
		opacity: 0.5;
	}

	.remaining,
	.progress {
		fill: transparent;
		stroke: white;
		stroke-width: 4px;
	}

	.remaining {
		opacity: 0.25;
	}

	.progress {
		stroke-dasharray: 188.495px, 188.495px;
		stroke-dashoffset: 188.495px;
	}

	.progress-text {
		font-size: 16px;
		font-weight: 600;
	}
</style>
