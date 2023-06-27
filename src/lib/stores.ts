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
import { writable } from 'svelte/store';
import type { FullPlayer } from 'scoresaber.js';

const ws = new ReconnectingWebSocket('ws://localhost:2947/socket');

export const handshake = writable<Handshake>();
export const gameState = writable<GameState>();
export const paused = writable<boolean>();
export const map = writable<MapInfoChanged>();
export const score = writable<ScoreEvent>();
export const scoreSaberUser = writable<FullPlayer>();

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
	const userId = data.playerPlatformId;
	const userReq = await fetch(`/?/getScoreSaberUser`, {
		'method': "POST",
		body: JSON.stringify({
			id: userId
		})
	})
	const userJson = await userReq.json();

	// Thank svelte form actions for making this a nightmare
	const user: FullPlayer = JSON.parse(JSON.parse(userJson.data)[0])
	scoreSaberUser.set(user);
})