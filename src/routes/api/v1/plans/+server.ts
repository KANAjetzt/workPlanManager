import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit';
import { new_plan } from '$db/plans';

export const POST: RequestHandler = async ({ request }) => {
	// get data from frontend
	const data = await request.json();
	console.log(data);

	// send data to db
	const { insertedId } = await new_plan(data).catch((e) => {
		console.error('ERROR: Creating new plan failed');
		console.error(e);

		return error(500, 'Creating new plan failed');
	});

	// return new response
	return json({
		status: 'success',
		documentId: insertedId,
		data
	});
};
