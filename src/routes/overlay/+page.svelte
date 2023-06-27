<script lang="ts">
	import './app.css';
	import { gameState } from '$lib/stores';
	import InGame from '$lib/overlays/InGame.svelte';
	import ScoreSaber from '$lib/overlays/ScoreSaber.svelte';
</script>

<div class="overlay">
	{#if $gameState == 'Playing'}
		<div class="card">
			<InGame />
		</div>
	{:else}
		<div class="card">
			<ScoreSaber />
		</div>
	{/if}
</div>

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
