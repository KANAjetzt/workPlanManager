import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({fetch}) => {
	const res = await fetch(`/api/v1/plans`);
	const data = await res.json();
	console.log(data);

	if (data) {
		return {
			status: 200,
			body: {
				data
			}
		};
	}

	throw error(404, 'Not found');
};
