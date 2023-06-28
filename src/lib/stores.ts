import ReconnectingWebSocket from 'reconnecting-websocket';
import type { GameState, MapInfoChanged, ScoreEvent, Handshake } from './types';
import {
	isHandshake,
	createEventObject,
	isGameStateEvent,
	isResumeEvent,
	isPauseEvent,
	isMapInfoEvent,
	isScoreEvent
} from './types';
import { get, writable } from 'svelte/store';
import type { FullPlayer } from 'scoresaber.js';
import type { BeatLeaderPlayer } from './BeatleaderPlayer';
import type { Params } from './params';

const ws = new ReconnectingWebSocket('ws://localhost:2947/socket');

export const handshake = writable<Handshake>();
export const gameState = writable<GameState>();
export const paused = writable<boolean>();
export const map = writable<MapInfoChanged>();
export const score = writable<ScoreEvent>();
export const scoreSaberUser = writable<FullPlayer>();
export const beatLeaderUser = writable<BeatLeaderPlayer>();
export const params = writable<Params>();

ws.onmessage = (event) => {
	const data = createEventObject(JSON.parse(event.data));
	if (isHandshake(data)) {
		handshake.set(data);
	}
	if (isGameStateEvent(data)) {
		gameState.set(data.gameStateChanged);
	}
	if (isResumeEvent(data)) {
		paused.set(false);
	}
	if (isPauseEvent(data)) {
		paused.set(true);
	}
	if (isMapInfoEvent(data)) {
		map.set(data.mapInfoChanged);
	}
	if (isScoreEvent(data)) {
		score.set(data);
	}
};

handshake.subscribe(async (data) => {
	if (!data) return;
	const p = get(params)

	if (!p.scoresaber_id && (p.leaderboard == 'both' || p.leaderboard == 'scoresaber')) updateScoreSaber(data.playerPlatformId)
	if (!p.beatleader_id && (p.leaderboard == 'both' || p.leaderboard == 'beatleader')) updateBeatLeader(data.playerPlatformId)
});

params.subscribe(async (params) => {
	if (!params) return;

	if (params.scoresaber_id && (params.leaderboard == 'both' || params.leaderboard == 'scoresaber')) updateScoreSaber(params.scoresaber_id)
	if (params.beatleader_id && (params.leaderboard == 'both' || params.leaderboard == 'beatleader')) updateBeatLeader(params.beatleader_id)
});

const updateBeatLeader = async (id: string) => {
	const userReq = await fetch(`/?/getBeatLeaderUser`, {
		method: 'POST',
		body: JSON.stringify({
			id: id
		})
	});
	const userJson = await userReq.json();

	// Thank svelte form actions for making this a nightmare
	const user: BeatLeaderPlayer = JSON.parse(JSON.parse(userJson.data)[0]);
	beatLeaderUser.set(user);
}

const updateScoreSaber = async (id: string) => {
	const userReq = await fetch(`/?/getScoreSaberUser`, {
		method: 'POST',
		body: JSON.stringify({
			id: id
		})
	});
	const userJson = await userReq.json();

	// Thank svelte form actions for making this a nightmare
	const user: FullPlayer = JSON.parse(JSON.parse(userJson.data)[0]);
	scoreSaberUser.set(user);
}