import { error, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	getScoreSaberUser: async ({ request }) => {
		const data = await request.json();
		const { id } = data;
		if (!id) throw error(400);
		const userReq = await fetch(`https://scoresaber.com/api/player/${id}/full`);
		const user = await userReq.json();
		return JSON.stringify(user);
	}
};
