import type { RequestHandler } from './$types';
import type { Plan } from '$db/plans';
import { error, json } from '@sveltejs/kit';
import slugify from 'slugify';
import { new_plan } from '$db/plans';

function getRandomURLPath(): string {
	// Generate a random URL Path for the share link
	const uuid = crypto.randomUUID();
	// Only grab the last part - so path is not long
	const uuid_split = uuid.split('-');

	return uuid_split[uuid_split.length - 1];
}

export const POST: RequestHandler = async ({ request }) => {
	// Get data from frontend
	const data: Plan = await request.json();

	// Add slug
	data.slug = slugify(data.title);

	// Add url paths for share and admin links
	// Share
	data.urls.share = getRandomURLPath();
	// Admin
	data.urls.admin = getRandomURLPath();

	console.log(data);

	// Send data to db
	const { insertedId } = await new_plan(data).catch((e) => {
		console.error('ERROR: Creating new plan failed');
		console.error(e.errInfo.details.schemaRulesNotSatisfied[0]);

		return error(500, 'Creating new plan failed');
	});

	// Return new response
	return json({
		status: 'success',
		documentId: insertedId,
		data
	});
};
