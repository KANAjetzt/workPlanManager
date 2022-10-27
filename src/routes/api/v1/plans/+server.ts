import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { new_plan } from '$db/plans';
import type { InsertOneResult } from 'mongodb';

export const POST: RequestHandler = async ({ request }) => {
	// get data from frontend
	const data = await request.json();
	console.log(data);

	// send data to db
	const new_plan_data = await new_plan(data).catch((e) => {
		console.error('ERROR: Creating new plan failed');
		console.error(e);
	});

	// return new response
	return new Response(
		JSON.stringify({
			status: 'success',
			documentId: new_plan_data.insertedId,
			data
		})
	);
};
