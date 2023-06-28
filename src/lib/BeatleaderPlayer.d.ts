export interface BeatLeaderPlayer {
  id: string
  name: string
  platform: string
  avatar: string
  country: string
  bot: boolean
  pp: number
  rank: number
  countryRank: number
  role: string
  socials: Social[]
  patreonFeatures: PatreonFeatures
  profileSettings: ProfileSettings
  clans: Clan[]
  accPp: number
  passPp: number
  techPp: number
  scoreStats: ScoreStats
  lastWeekPp: number
  lastWeekRank: number
  lastWeekCountryRank: number
  eventsParticipating: EventsParticipating[]
  mapperId: number
  banned: boolean
  inactive: boolean
  banDescription: BanDescription
  externalProfileUrl: string
  history: History[]
  badges: Badge[]
  pinnedScores: PinnedScore[]
  changes: Change4[]
}

export interface Social {
  id: number
  service: string
  link: string
  user: string
  userId: string
  playerId: string
}

export interface PatreonFeatures {
  id: number
  bio: string
  message: string
  leftSaberColor: string
  rightSaberColor: string
}

export interface ProfileSettings {
  id: number
  bio: string
  message: string
  effectName: string
  profileAppearance: string
  hue: number
  saturation: number
  leftSaberColor: string
  rightSaberColor: string
  profileCover: string
  starredFriends: string
  showBots: boolean
  showAllRatings: boolean
}

export interface Clan {
  id: number
  tag: string
  color: string
}

export interface ScoreStats {
  id: number
  totalScore: number
  totalUnrankedScore: number
  totalRankedScore: number
  lastScoreTime: number
  lastUnrankedScoreTime: number
  lastRankedScoreTime: number
  averageRankedAccuracy: number
  averageWeightedRankedAccuracy: number
  averageUnrankedAccuracy: number
  averageAccuracy: number
  medianRankedAccuracy: number
  medianAccuracy: number
  topRankedAccuracy: number
  topUnrankedAccuracy: number
  topAccuracy: number
  topPp: number
  topBonusPP: number
  topPassPP: number
  topAccPP: number
  topTechPP: number
  peakRank: number
  rankedMaxStreak: number
  unrankedMaxStreak: number
  maxStreak: number
  averageLeftTiming: number
  averageRightTiming: number
  rankedPlayCount: number
  unrankedPlayCount: number
  totalPlayCount: number
  averageRankedRank: number
  averageWeightedRankedRank: number
  averageUnrankedRank: number
  averageRank: number
  sspPlays: number
  ssPlays: number
  spPlays: number
  sPlays: number
  aPlays: number
  topPlatform: string
  topHMD: number
  dailyImprovements: number
  authorizedReplayWatched: number
  anonimusReplayWatched: number
  watchedReplays: number
}

export interface EventsParticipating {
  id: number
  eventId: number
  name: string
  playerId: string
  country: string
  rank: number
  countryRank: number
  pp: number
}

export interface BanDescription {
  id: number
  playerId: string
  bannedBy: string
  banReason: string
  timeset: number
  duration: number
}

export interface History {
  id: number
  timestamp: number
  playerId: string
  pp: number
  rank: number
  countryRank: number
  totalScore: number
  totalUnrankedScore: number
  totalRankedScore: number
  lastScoreTime: number
  lastUnrankedScoreTime: number
  lastRankedScoreTime: number
  averageRankedAccuracy: number
  averageWeightedRankedAccuracy: number
  averageUnrankedAccuracy: number
  averageAccuracy: number
  medianRankedAccuracy: number
  medianAccuracy: number
  topRankedAccuracy: number
  topUnrankedAccuracy: number
  topAccuracy: number
  topPp: number
  topBonusPP: number
  peakRank: number
  maxStreak: number
  averageLeftTiming: number
  averageRightTiming: number
  rankedPlayCount: number
  unrankedPlayCount: number
  totalPlayCount: number
  averageRankedRank: number
  averageWeightedRankedRank: number
  averageUnrankedRank: number
  averageRank: number
  sspPlays: number
  ssPlays: number
  spPlays: number
  sPlays: number
  aPlays: number
  topPlatform: string
  topHMD: number
  dailyImprovements: number
  replaysWatched: number
  watchedReplays: number
}

export interface Badge {
  id: number
  description: string
  image: string
  link: string
}

export interface PinnedScore {
  id: number
  baseScore: number
  modifiedScore: number
  accuracy: number
  playerId: string
  pp: number
  bonusPp: number
  passPP: number
  accPP: number
  techPP: number
  rank: number
  country: string
  fcAccuracy: number
  fcPp: number
  replay: string
  modifiers: string
  badCuts: number
  missedNotes: number
  bombCuts: number
  wallsHit: number
  pauses: number
  fullCombo: boolean
  platform: string
  maxCombo: number
  maxStreak: number
  hmd: number
  controller: number
  leaderboardId: string
  timeset: string
  timepost: number
  replaysWatched: number
  playCount: number
  player: Player
  scoreImprovement: ScoreImprovement
  rankVoting: RankVoting
  metadata: Metadata
  offsets: Offsets
  weight: number
  accLeft: number
  accRight: number
  myScore: MyScore
  leaderboard: Leaderboard
}

export interface Player {
  id: string
  name: string
  platform: string
  avatar: string
  country: string
  bot: boolean
  pp: number
  rank: number
  countryRank: number
  role: string
  socials: Social2[]
  patreonFeatures: PatreonFeatures2
  profileSettings: ProfileSettings2
  clans: Clan2[]
}

export interface Social2 {
  id: number
  service: string
  link: string
  user: string
  userId: string
  playerId: string
}

export interface PatreonFeatures2 {
  id: number
  bio: string
  message: string
  leftSaberColor: string
  rightSaberColor: string
}

export interface ProfileSettings2 {
  id: number
  bio: string
  message: string
  effectName: string
  profileAppearance: string
  hue: number
  saturation: number
  leftSaberColor: string
  rightSaberColor: string
  profileCover: string
  starredFriends: string
  showBots: boolean
  showAllRatings: boolean
}

export interface Clan2 {
  id: number
  tag: string
  color: string
}

export interface ScoreImprovement {
  id: number
  timeset: string
  score: number
  accuracy: number
  pp: number
  bonusPp: number
  rank: number
  accRight: number
  accLeft: number
  averageRankedAccuracy: number
  totalPp: number
  totalRank: number
  badCuts: number
  missedNotes: number
  bombCuts: number
  wallsHit: number
  pauses: number
}

export interface RankVoting {
  scoreId: number
  playerId: string
  hash: string
  diff: string
  mode: string
  rankability: number
  stars: number
  type: number
  timeset: number
  feedbacks: Feedback[]
}

export interface Feedback {
  id: number
  rtMember: string
  value: number
}

export interface Metadata {
  id: number
  status: number
  priority: number
  description: string
  linkService: string
  linkServiceIcon: string
  link: string
}

export interface Offsets {
  id: number
  frames: number
  notes: number
  walls: number
  heights: number
  pauses: number
}

export interface MyScore {
  id: number
  baseScore: number
  modifiedScore: number
  accuracy: number
  playerId: string
  pp: number
  bonusPp: number
  passPP: number
  accPP: number
  techPP: number
  rank: number
  country: string
  fcAccuracy: number
  fcPp: number
  replay: string
  modifiers: string
  badCuts: number
  missedNotes: number
  bombCuts: number
  wallsHit: number
  pauses: number
  fullCombo: boolean
  platform: string
  maxCombo: number
  maxStreak: number
  hmd: number
  controller: number
  leaderboardId: string
  timeset: string
  timepost: number
  replaysWatched: number
  playCount: number
  player: Player2
  scoreImprovement: ScoreImprovement2
  rankVoting: RankVoting2
  metadata: Metadata2
  offsets: Offsets2
  weight: number
  accLeft: number
  accRight: number
}

export interface Player2 {
  id: string
  name: string
  platform: string
  avatar: string
  country: string
  bot: boolean
  pp: number
  rank: number
  countryRank: number
  role: string
  socials: Social3[]
  patreonFeatures: PatreonFeatures3
  profileSettings: ProfileSettings3
  clans: Clan3[]
}

export interface Social3 {
  id: number
  service: string
  link: string
  user: string
  userId: string
  playerId: string
}

export interface PatreonFeatures3 {
  id: number
  bio: string
  message: string
  leftSaberColor: string
  rightSaberColor: string
}

export interface ProfileSettings3 {
  id: number
  bio: string
  message: string
  effectName: string
  profileAppearance: string
  hue: number
  saturation: number
  leftSaberColor: string
  rightSaberColor: string
  profileCover: string
  starredFriends: string
  showBots: boolean
  showAllRatings: boolean
}

export interface Clan3 {
  id: number
  tag: string
  color: string
}

export interface ScoreImprovement2 {
  id: number
  timeset: string
  score: number
  accuracy: number
  pp: number
  bonusPp: number
  rank: number
  accRight: number
  accLeft: number
  averageRankedAccuracy: number
  totalPp: number
  totalRank: number
  badCuts: number
  missedNotes: number
  bombCuts: number
  wallsHit: number
  pauses: number
}

export interface RankVoting2 {
  scoreId: number
  playerId: string
  hash: string
  diff: string
  mode: string
  rankability: number
  stars: number
  type: number
  timeset: number
  feedbacks: Feedback2[]
}

export interface Feedback2 {
  id: number
  rtMember: string
  value: number
}

export interface Metadata2 {
  id: number
  status: number
  priority: number
  description: string
  linkService: string
  linkServiceIcon: string
  link: string
}

export interface Offsets2 {
  id: number
  frames: number
  notes: number
  walls: number
  heights: number
  pauses: number
}

export interface Leaderboard {
  id: string
  song: Song
  difficulty: Difficulty2
  scores: Score[]
  changes: Change[]
  qualification: Qualification
  reweight: Reweight
  leaderboardGroup: LeaderboardGroup[]
  plays: number
}

export interface Song {
  id: string
  hash: string
  name: string
  subName: string
  author: string
  mapper: string
  mapperId: number
  coverImage: string
  fullCoverImage: string
  downloadUrl: string
  bpm: number
  duration: number
  tags: string
  uploadTime: number
  difficulties: Difficulty[]
}

export interface Difficulty {
  id: number
  value: number
  mode: number
  difficultyName: string
  modeName: string
  status: number
  modifierValues: ModifierValues
  modifiersRating: ModifiersRating
  nominatedTime: number
  qualifiedTime: number
  rankedTime: number
  stars: number
  predictedAcc: number
  passRating: number
  accRating: number
  techRating: number
  type: number
  njs: number
  nps: number
  notes: number
  bombs: number
  walls: number
  maxScore: number
  duration: number
  requirements: number
}

export interface ModifierValues {
  modifierId: number
  da: number
  fs: number
  sf: number
  ss: number
  gn: number
  na: number
  nb: number
  nf: number
  no: number
  pm: number
  sc: number
  sa: number
  op: number
}

export interface ModifiersRating {
  id: number
  fsPredictedAcc: number
  fsPassRating: number
  fsAccRating: number
  fsTechRating: number
  fsStars: number
  ssPredictedAcc: number
  ssPassRating: number
  ssAccRating: number
  ssTechRating: number
  ssStars: number
  sfPredictedAcc: number
  sfPassRating: number
  sfAccRating: number
  sfTechRating: number
  sfStars: number
}

export interface Difficulty2 {
  id: number
  value: number
  mode: number
  difficultyName: string
  modeName: string
  status: number
  modifierValues: ModifierValues2
  modifiersRating: ModifiersRating2
  nominatedTime: number
  qualifiedTime: number
  rankedTime: number
  stars: number
  predictedAcc: number
  passRating: number
  accRating: number
  techRating: number
  type: number
  njs: number
  nps: number
  notes: number
  bombs: number
  walls: number
  maxScore: number
  duration: number
  requirements: number
}

export interface ModifierValues2 {
  modifierId: number
  da: number
  fs: number
  sf: number
  ss: number
  gn: number
  na: number
  nb: number
  nf: number
  no: number
  pm: number
  sc: number
  sa: number
  op: number
}

export interface ModifiersRating2 {
  id: number
  fsPredictedAcc: number
  fsPassRating: number
  fsAccRating: number
  fsTechRating: number
  fsStars: number
  ssPredictedAcc: number
  ssPassRating: number
  ssAccRating: number
  ssTechRating: number
  ssStars: number
  sfPredictedAcc: number
  sfPassRating: number
  sfAccRating: number
  sfTechRating: number
  sfStars: number
}

export interface Score {
  id: number
  baseScore: number
  modifiedScore: number
  accuracy: number
  playerId: string
  pp: number
  bonusPp: number
  passPP: number
  accPP: number
  techPP: number
  rank: number
  country: string
  fcAccuracy: number
  fcPp: number
  weight: number
  replay: string
  modifiers: string
  badCuts: number
  missedNotes: number
  bombCuts: number
  wallsHit: number
  pauses: number
  fullCombo: boolean
  platform: string
  maxCombo: number
  maxStreak: number
  hmd: number
  controller: number
  leaderboardId: string
  timeset: string
  timepost: number
  replaysWatched: number
  playCount: number
  player: Player3
  scoreImprovement: ScoreImprovement3
  rankVoting: RankVoting3
  metadata: Metadata3
  offsets: Offsets3
}

export interface Player3 {
  id: string
  name: string
  platform: string
  avatar: string
  country: string
  bot: boolean
  pp: number
  rank: number
  countryRank: number
  role: string
  socials: Social4[]
  patreonFeatures: PatreonFeatures4
  profileSettings: ProfileSettings4
  clans: Clan4[]
}

export interface Social4 {
  id: number
  service: string
  link: string
  user: string
  userId: string
  playerId: string
}

export interface PatreonFeatures4 {
  id: number
  bio: string
  message: string
  leftSaberColor: string
  rightSaberColor: string
}

export interface ProfileSettings4 {
  id: number
  bio: string
  message: string
  effectName: string
  profileAppearance: string
  hue: number
  saturation: number
  leftSaberColor: string
  rightSaberColor: string
  profileCover: string
  starredFriends: string
  showBots: boolean
  showAllRatings: boolean
}

export interface Clan4 {
  id: number
  tag: string
  color: string
}

export interface ScoreImprovement3 {
  id: number
  timeset: string
  score: number
  accuracy: number
  pp: number
  bonusPp: number
  rank: number
  accRight: number
  accLeft: number
  averageRankedAccuracy: number
  totalPp: number
  totalRank: number
  badCuts: number
  missedNotes: number
  bombCuts: number
  wallsHit: number
  pauses: number
}

export interface RankVoting3 {
  scoreId: number
  playerId: string
  hash: string
  diff: string
  mode: string
  rankability: number
  stars: number
  type: number
  timeset: number
  feedbacks: Feedback3[]
}

export interface Feedback3 {
  id: number
  rtMember: string
  value: number
}

export interface Metadata3 {
  id: number
  status: number
  priority: number
  description: string
  linkService: string
  linkServiceIcon: string
  link: string
}

export interface Offsets3 {
  id: number
  frames: number
  notes: number
  walls: number
  heights: number
  pauses: number
}

export interface Change {
  id: number
  timeset: number
  playerId: string
  oldRankability: number
  oldStars: number
  oldAccRating: number
  oldPassRating: number
  oldTechRating: number
  oldType: number
  oldCriteriaMet: number
  oldModifiers: OldModifiers
  oldModifiersRating: OldModifiersRating
  newRankability: number
  newStars: number
  newAccRating: number
  newPassRating: number
  newTechRating: number
  newType: number
  newCriteriaMet: number
  newModifiers: NewModifiers
  newModifiersRating: NewModifiersRating
}

export interface OldModifiers {
  modifierId: number
  da: number
  fs: number
  sf: number
  ss: number
  gn: number
  na: number
  nb: number
  nf: number
  no: number
  pm: number
  sc: number
  sa: number
  op: number
}

export interface OldModifiersRating {
  id: number
  fsPredictedAcc: number
  fsPassRating: number
  fsAccRating: number
  fsTechRating: number
  fsStars: number
  ssPredictedAcc: number
  ssPassRating: number
  ssAccRating: number
  ssTechRating: number
  ssStars: number
  sfPredictedAcc: number
  sfPassRating: number
  sfAccRating: number
  sfTechRating: number
  sfStars: number
}

export interface NewModifiers {
  modifierId: number
  da: number
  fs: number
  sf: number
  ss: number
  gn: number
  na: number
  nb: number
  nf: number
  no: number
  pm: number
  sc: number
  sa: number
  op: number
}

export interface NewModifiersRating {
  id: number
  fsPredictedAcc: number
  fsPassRating: number
  fsAccRating: number
  fsTechRating: number
  fsStars: number
  ssPredictedAcc: number
  ssPassRating: number
  ssAccRating: number
  ssTechRating: number
  ssStars: number
  sfPredictedAcc: number
  sfPassRating: number
  sfAccRating: number
  sfTechRating: number
  sfStars: number
}

export interface Qualification {
  id: number
  timeset: number
  rtMember: string
  criteriaTimeset: number
  criteriaMet: number
  criteriaChecker: string
  criteriaCommentary: string
  mapperAllowed: boolean
  mapperId: string
  mapperQualification: boolean
  approvalTimeset: number
  approved: boolean
  approvers: string
  criteriaCheck: string
  modifiers: Modifiers
  modifiersRating: ModifiersRating3
  changes: Change2[]
  comments: Comment[]
  criteriaComments: CriteriaComment[]
  qualityVote: number
  votes: Vote[]
  discordChannelId: string
  discordRTChannelId: string
}

export interface Modifiers {
  modifierId: number
  da: number
  fs: number
  sf: number
  ss: number
  gn: number
  na: number
  nb: number
  nf: number
  no: number
  pm: number
  sc: number
  sa: number
  op: number
}

export interface ModifiersRating3 {
  id: number
  fsPredictedAcc: number
  fsPassRating: number
  fsAccRating: number
  fsTechRating: number
  fsStars: number
  ssPredictedAcc: number
  ssPassRating: number
  ssAccRating: number
  ssTechRating: number
  ssStars: number
  sfPredictedAcc: number
  sfPassRating: number
  sfAccRating: number
  sfTechRating: number
  sfStars: number
}

export interface Change2 {
  id: number
  timeset: number
  playerId: string
  oldRankability: number
  oldStars: number
  oldAccRating: number
  oldPassRating: number
  oldTechRating: number
  oldType: number
  oldCriteriaMet: number
  oldCriteriaCommentary: string
  oldModifiers: OldModifiers2
  newRankability: number
  newStars: number
  newAccRating: number
  newPassRating: number
  newTechRating: number
  newType: number
  newCriteriaMet: number
  newCriteriaCommentary: string
  newModifiers: NewModifiers2
}

export interface OldModifiers2 {
  modifierId: number
  da: number
  fs: number
  sf: number
  ss: number
  gn: number
  na: number
  nb: number
  nf: number
  no: number
  pm: number
  sc: number
  sa: number
  op: number
}

export interface NewModifiers2 {
  modifierId: number
  da: number
  fs: number
  sf: number
  ss: number
  gn: number
  na: number
  nb: number
  nf: number
  no: number
  pm: number
  sc: number
  sa: number
  op: number
}

export interface Comment {
  id: number
  playerId: string
  timeset: number
  value: string
  editTimeset: number
  edited: boolean
  rankQualificationId: number
  rankQualification: string
  discordMessageId: string
}

export interface CriteriaComment {
  id: number
  playerId: string
  timeset: number
  value: string
  editTimeset: number
  edited: boolean
  rankQualificationId: number
  rankQualification: string
  discordMessageId: string
}

export interface Vote {
  id: number
  playerId: string
  timeset: number
  value: number
  editTimeset: number
  edited: boolean
  rankQualificationId: number
  rankQualification: string
  discordRTMessageId: string
}

export interface Reweight {
  id: number
  timeset: number
  rtMember: string
  keep: boolean
  stars: number
  passRating: number
  techRating: number
  predictedAcc: number
  type: number
  criteriaMet: number
  criteriaCommentary: string
  finished: boolean
  modifiers: Modifiers2
  modifiersRating: ModifiersRating4
  changes: Change3[]
}

export interface Modifiers2 {
  modifierId: number
  da: number
  fs: number
  sf: number
  ss: number
  gn: number
  na: number
  nb: number
  nf: number
  no: number
  pm: number
  sc: number
  sa: number
  op: number
}

export interface ModifiersRating4 {
  id: number
  fsPredictedAcc: number
  fsPassRating: number
  fsAccRating: number
  fsTechRating: number
  fsStars: number
  ssPredictedAcc: number
  ssPassRating: number
  ssAccRating: number
  ssTechRating: number
  ssStars: number
  sfPredictedAcc: number
  sfPassRating: number
  sfAccRating: number
  sfTechRating: number
  sfStars: number
}

export interface Change3 {
  id: number
  timeset: number
  playerId: string
  oldKeep: boolean
  oldStars: number
  oldType: number
  oldCriteriaMet: number
  oldCriteriaCommentary: string
  oldModifiers: OldModifiers3
  newKeep: boolean
  newStars: number
  newType: number
  newCriteriaMet: number
  newCriteriaCommentary: string
  newModifiers: NewModifiers3
}

export interface OldModifiers3 {
  modifierId: number
  da: number
  fs: number
  sf: number
  ss: number
  gn: number
  na: number
  nb: number
  nf: number
  no: number
  pm: number
  sc: number
  sa: number
  op: number
}

export interface NewModifiers3 {
  modifierId: number
  da: number
  fs: number
  sf: number
  ss: number
  gn: number
  na: number
  nb: number
  nf: number
  no: number
  pm: number
  sc: number
  sa: number
  op: number
}

export interface LeaderboardGroup {
  id: string
  status: number
  timestamp: number
}

export interface Change4 {
  id: number
  timestamp: number
  playerId: string
  oldName: string
  newName: string
  oldCountry: string
  newCountry: string
  changer: string
}
