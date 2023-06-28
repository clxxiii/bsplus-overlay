<script lang="ts">
	import { map } from '$lib/stores';
	import { fly } from 'svelte/transition';
	import Cover from './Cover.svelte';
</script>

<div transition:fly={{ duration: 200, y: 20, x: 0, delay: 100 }} class="cover">
	<Cover />
</div>

<div class="meta">
	<div class="text">
		<div transition:fly={{ duration: 200, y: 20, x: 0, delay: 100 }} class="titles">
			<div class="title">{$map?.name ?? 'Title'}</div>
			<div class="subtitle">{$map?.sub_name ?? 'Subtitle'}</div>
		</div>

		<div transition:fly={{ duration: 200, y: 20, x: 0, delay: 50 }} class="artists">
			<span class="artist">{$map?.artist ?? 'Artist'}</span>
			<span class="mapper">[{$map?.mapper ?? 'Mapper Name'}]</span>
		</div>
	</div>

	<div transition:fly={{ duration: 200, y: 20, x: 0, delay: 0 }} class="stats">
		<div class="difficulty">{$map?.difficulty ?? 'Easy'}</div>
		<div class="bpm">{$map?.BPM ?? '0'} BPM</div>
	</div>
</div>

<style>
	.cover {
		width: 90px;
		height: 90px;
		overflow: hidden;
		border-radius: 6px;
		position: relative;
	}

	.meta {
		display: flex;
		flex-direction: column;

		flex-grow: 1;
		padding: 0 16px;
	}
	.titles {
		display: flex;
		align-items: flex-end;
	}

	.stats {
		margin-top: 2px;
	}

	.artists {
		display: flex;
		flex-direction: row;
		margin: 2px 0 0 0;
	}

	.title {
		font-size: 24px;
		font-weight: 700;
	}

	.subtitle {
		font-size: 14px;
		font-weight: 600;
		margin: 0 4px 2px 4px;
		opacity: 0.75;
	}

	.artist {
		order: 1;
		display: block;
		font-size: 16px;
		font-weight: 400;
	}
	.mapper {
		order: 2;
		font-size: 10px;
		font-weight: 300;
		opacity: 0.75;

		margin: 6px 4px 0 4px;
	}

	.difficulty {
		padding: 4px 5px 4px 8px;

		color: black;
		background: white;
		border-radius: 4px;
	}

	.bpm {
		margin: 0 8px;
	}

	.difficulty,
	.bpm {
		display: inline-block;

		font-size: 10px;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 3px;
	}
</style>
