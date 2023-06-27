<script lang="ts">
	import { scoreSaberUser } from '$lib/stores';
	import { fly } from 'svelte/transition';
	import Flag from './components/Flag.svelte';
</script>

<div
	in:fly={{ duration: 200, delay: 500, x: -50, y: 0 }}
	out:fly={{ duration: 200, delay: 0, x: 0, y: -100 }}
	class="user"
>
	<div class="profile">
		<img class="profilepic" src={$scoreSaberUser?.profilePicture} alt="profile" />
		<img class="service" src="https://scoresaber.com/images/logo.svg" alt="" />
		<!-- <img class="service" src="https://beatleader.xyz/assets/favicon-96x96.png" alt="" /> -->
	</div>
	<div class="meta">
		<div class="name-flag">
			<div class="name">{$scoreSaberUser?.name ?? 'username'}</div>
			<div class="flag">
				<Flag country={$scoreSaberUser?.country ?? 'US'} width={24} />
			</div>
		</div>
		<div class="stats">
			<div class="accuracy">
				{$scoreSaberUser?.scoreStats?.averageRankedAccuracy?.toFixed(2) ?? '0.00'}% AVG
			</div>

			<div class="accuracy">
				{$scoreSaberUser?.scoreStats?.totalScore.toLocaleString() ?? '1,000,000'} SCORE
			</div>
		</div>
		<div class="ranks">
			<div class="rank">
				#{$scoreSaberUser?.rank?.toLocaleString() ?? '0'}
			</div>

			<div class="pp">
				{$scoreSaberUser?.pp?.toLocaleString() ?? '0'} PP
			</div>
		</div>
	</div>
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
