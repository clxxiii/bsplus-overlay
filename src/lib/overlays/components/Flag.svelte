<script lang="ts">
	export let width = 40;
	export let country = 'US';
	const url = `https://osu.ppy.sh/images/flags/${country}.png`;
</script>

<img style="width: {width}px" src={url} alt="flag" />

<style>
	img {
		aspect-ratio: 1.6;
	}
</style>
