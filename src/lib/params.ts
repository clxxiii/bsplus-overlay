type Leaderboard = 'both' | 'scoresaber' | 'beatleader' | 'none'
export type Params = {
  leaderboard?: Leaderboard
  scoresaber_id?: string | null;
  beatleader_id?: string | null;
  message?: string;
}

export const getParams = (usp: URLSearchParams): Params => {
  const params: Params = {
    message: ""
  }

  params.scoresaber_id = usp.get("scoresaber_id");
  params.beatleader_id = usp.get("beatleader_id");

  const leaderboardStr = usp.get("leaderboard") ?? "both";

  if (validLeaderboard(leaderboardStr)) params.leaderboard = leaderboardStr

  if (!params.leaderboard) params.message += "Leaderboard, "

  if (params.message != "") {
    params.message += "properties are malformed!"
  }

  return params;
}

const validLeaderboard = (s: string): s is Leaderboard => {
  return s == "both" || s == 'scoresaber' || s == 'beatleader' || s == 'none'
}