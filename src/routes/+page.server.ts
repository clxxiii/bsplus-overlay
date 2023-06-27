import { error, type Actions } from '@sveltejs/kit';
import ScoreSaber from "scoresaber.js";

export const actions: Actions = {
  getScoreSaberUser: async ({ request }) => {
    const data = await request.json();
    const { id } = data
    if (!id) throw error(400)
    const user = await ScoreSaber.fetchFullPlayer(id)
    return JSON.stringify(user);
  }
}