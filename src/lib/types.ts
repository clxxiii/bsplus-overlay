type EventType = 'gameState' | 'resume' | 'pause' | 'mapInfo' | 'score';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type In = { [key: string]: any };
type LetterGrade = 'SSS' | 'SS' | 'S' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export type MapInfoChanged = {
	level_id: string;
	name: string;
	sub_name: string;
	artist: string;
	mapper: string;
	characteristic: string;
	difficulty: string;
	duration: number;
	BPM: number;
	PP: number;
	BSRKey: string;
	coverRaw: string;
	time: number;
	timeMultiplier: number;
};
export type Score = {
	time: number;
	score: number;
	accuracy: number;
	combo: number;
	missCount: number;
	currentHealth: number;
};

export class Event {
	_type: 'event' | 'handshake' = 'event';
	_event?: EventType;
}

export class Handshake extends Event {
	declare _type: 'handshake';
	declare _event: undefined;
	gameVersion: string;
	playerName: string;
	playerPlatformId: string;
	protocolVersion: number;

	constructor(event: In) {
		super();
		this._type = 'handshake';
		this.gameVersion = event.gameVersion;
		this.playerName = event.playerName;
		this.playerPlatformId = event.playerPlatformId;
		this.protocolVersion = event.protocolVersion;
	}
}

export type GameState = 'Menu' | 'Playing';
export class GameStateEvent extends Event {
	declare _event: 'gameState';
	gameStateChanged: GameState;
	constructor(event: In) {
		super();
		this._type = 'event';
		this._event = 'gameState';
		this.gameStateChanged = event.gameStateChanged;
	}
}

export class ResumeEvent extends Event {
	declare _event: 'resume';
	resumeTime: number;
	constructor(event: In) {
		super();
		this._type = 'event';
		this._event = 'resume';
		this.resumeTime = event.resumeTime;
	}
}

export class PauseEvent extends Event {
	declare _event: 'pause';
	pauseTime: number;
	constructor(event: In) {
		super();
		this._type = 'event';
		this._event = 'pause';
		this.pauseTime = event.pauseTime;
	}
}

export class MapInfoEvent extends Event {
	declare _event: 'mapInfo';
	mapInfoChanged: MapInfoChanged;
	constructor(event: In) {
		super();
		this._type = 'event';
		this._event = 'mapInfo';
		this.mapInfoChanged = {
			level_id: event.mapInfoChanged.level_id,
			name: event.mapInfoChanged.name,
			sub_name: event.mapInfoChanged.sub_name,
			artist: event.mapInfoChanged.artist,
			mapper: event.mapInfoChanged.mapper,
			characteristic: event.mapInfoChanged.characteristic,
			difficulty: event.mapInfoChanged.difficulty,
			duration: event.mapInfoChanged.duration,
			BPM: event.mapInfoChanged.BPM,
			PP: event.mapInfoChanged.PP,
			BSRKey: event.mapInfoChanged.BSRKey,
			coverRaw: event.mapInfoChanged.coverRaw,
			time: event.mapInfoChanged.time,
			timeMultiplier: event.mapInfoChanged.timeMultiplier
		};
	}
	toString(): string {
		return `${this.mapInfoChanged.artist} - ${this.mapInfoChanged.name} mapped by ${this.mapInfoChanged.mapper}`;
	}
}

export class ScoreEvent extends Event {
	declare _event: 'score';
	scoreEvent: Score;
	constructor(event: In) {
		super();
		this._event = 'score';
		this._type = 'event';
		this.scoreEvent = {
			time: event.scoreEvent.time,
			score: event.scoreEvent.score,
			accuracy: event.scoreEvent.accuracy,
			combo: event.scoreEvent.combo,
			missCount: event.scoreEvent.missCount,
			currentHealth: event.scoreEvent.currentHealth
		};
	}
	letterGrade(): LetterGrade {
		const { accuracy: acc, time, currentHealth } = this.scoreEvent;
		if (currentHealth == 0) return 'F';
		if (acc == 1 && time > 0) return 'SSS';
		else if (acc >= 0.8) return 'S';
		else if (acc >= 0.7) return 'A';
		else if (acc >= 0.6) return 'B';
		else if (acc >= 0.5) return 'C';
		else if (acc >= 0.4) return 'D';
		else if (acc >= 0.3) return 'E';

		return 'SS';
	}
}

export function createEventObject(data: In): Event {
	if (data._type == 'handshake') {
		return new Handshake(data);
	} else if (data._event == 'gameState') {
		return new GameStateEvent(data);
	} else if (data._event == 'resume') {
		return new ResumeEvent(data);
	} else if (data._event == 'pause') {
		return new PauseEvent(data);
	} else if (data._event == 'mapInfo') {
		return new MapInfoEvent(data);
	} else if (data._event == 'score') {
		return new ScoreEvent(data);
	}

	return new Event();
}

export function isHandshake(event: Event): event is Handshake {
	return event._type == 'handshake';
}

export function isGameStateEvent(event: Event): event is GameStateEvent {
	return event._event == 'gameState';
}

export function isPauseEvent(event: Event): event is PauseEvent {
	return event._event == 'pause';
}

export function isResumeEvent(event: Event): event is ResumeEvent {
	return event._event == 'resume';
}

export function isMapInfoEvent(event: Event): event is MapInfoEvent {
	return event._event == 'mapInfo';
}

export function isScoreEvent(event: Event): event is ScoreEvent {
	return event._event == 'score';
}
