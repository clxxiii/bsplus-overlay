<script lang="ts">
	import './app.css';
	import { fly } from 'svelte/transition';
	import { gameState, params } from '$lib/stores';
	import InGame from '$lib/overlays/InGame.svelte';
	import ScoreSaber from '$lib/overlays/ScoreSaber.svelte';
	import BeatLeader from '$lib/overlays/BeatLeader.svelte';

	export let data;
	let error: string;
	if (data.params.message) {
		error = data.params.message;
	} else {
		params.set(data.params);
	}

	let beatleader = false;
	let scoresaber = false;

	const toggle = () => {
		if (scoresaber) {
			scoresaber = false;
			beatleader = true;
		} else {
			scoresaber = true;
			beatleader = false;
		}
	};

	if (data.params.leaderboard == 'beatleader') beatleader = true;
	if (data.params.leaderboard == 'scoresaber') scoresaber = true;
	if (data.params.leaderboard == 'both') {
		setInterval(toggle, 5 * 1000);
		scoresaber = true;
	}
</script>

{#if error}
	<div class="error">{error}</div>
{:else}
	<div class="overlay">
		{#if $gameState == 'Playing'}
			<div class="card">
				<InGame />
			</div>
		{:else}
			<div
				in:fly={{ duration: 200, delay: 500, x: -50, y: 0 }}
				out:fly={{ duration: 200, delay: 0, x: 0, y: -100 }}
				class="player-stats"
			>
				{#if scoresaber}
					<div class="card">
						<ScoreSaber />
					</div>
				{:else if beatleader}
					<div class="card">
						<BeatLeader />
					</div>
				{/if}
			</div>
		{/if}
	</div>
{/if}

<style>
	.card {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
	}
	.overlay {
		display: flex;
		flex-direction: column;

		width: calc(100% - 40px);
		position: absolute;
		left: 40px;
		bottom: 40px;
	}
</style>
