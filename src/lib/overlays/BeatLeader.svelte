<script lang="ts">
	import { beatLeaderUser } from '$lib/stores';
	import { blur } from 'svelte/transition';
	import Flag from './components/Flag.svelte';
</script>

<div transition:blur={{ duration: 1000, delay: 0 }} class="user">
	{#if $beatLeaderUser}
		<div class="profile">
			<img class="profilepic" src={$beatLeaderUser?.avatar ?? ''} alt="profile" />
			<img class="service" src="https://beatleader.xyz/assets/favicon-96x96.png" alt="" />
		</div>
		<div class="meta">
			<div class="name-flag">
				<div class="name">{$beatLeaderUser?.name ?? 'username'}</div>
				<div class="flag">
					<Flag country={$beatLeaderUser?.country ?? 'US'} width={24} />
				</div>
			</div>
			<div class="stats">
				<div class="accuracy">
					{($beatLeaderUser?.scoreStats?.averageAccuracy * 100)?.toFixed(2) ?? '0.00'}% AVG
				</div>

				<div class="accuracy">
					{$beatLeaderUser?.scoreStats?.topPp?.toFixed(2) ?? '100'} TOP PP
				</div>
			</div>
			<div class="ranks">
				<div class="rank">
					#{$beatLeaderUser?.rank?.toLocaleString() ?? '0'}
				</div>

				<div class="pp">
					{Math.round($beatLeaderUser?.pp)?.toLocaleString() ?? '0'} PP
				</div>
			</div>
		</div>
	{:else}
		No Beatleader Information
	{/if}
</div>

<style>
	.user {
		display: flex;
	}
	.profile {
		position: relative;
		margin-right: 20px;
	}
	.profilepic {
		width: 90px;
		height: 90px;
		border-radius: 6px;
	}
	.service {
		position: absolute;
		top: -10px;
		right: -10px;
		width: 30px;
		height: 30px;
	}
	.name-flag,
	.ranks,
	.stats {
		display: flex;
		align-items: center;
	}
	.flag {
		margin-left: 10px;
	}
	.accuracy {
		font-size: 12px;
		margin: 0 8px 5px 0;
	}
	.name {
		font-size: 24px;
		font-weight: 700;
	}
	.rank {
		font-size: 12px;
		padding: 4px 8px 4px 8px;

		color: black;
		background: white;
		border-radius: 4px;
	}
	.pp {
		font-size: 10px;
		margin-left: 5px;
	}
</style>
