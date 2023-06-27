<script lang="ts">
	import Map from './components/Map.svelte';
	import Performance from './components/Performance.svelte';
</script>

<div class="performance">
	<Performance />
</div>
<div class="beatmap">
	<Map />
</div>

<style>
	.beatmap {
		display: flex;
		width: 100%;
	}
	.performance {
		display: flex;
		flex-direction: column;
		margin: 0 0 20px 0;
	}
</style>
