import type { Actions } from './$types';
import slugify from 'slugify';
import { get_random_string } from '$lib/get_random_string';
import { new_plan, type Plan } from '$db/plans';
import { json } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const db_data: Plan = {
			title: '',
			slug: '',
			urls: {
				admin: '',
				share: ''
			}
		};

		// Get form data
		const data = await request.formData();

		db_data.title = `${data.get('name')}`;

		// Add slug
		db_data.slug = slugify(db_data.title);

		// Generate Links
		// Admin
		db_data.urls.admin = `http://localhost:5173/${db_data.slug}/admin/${get_random_string()}`;
		// Share
		db_data.urls.share = `http://localhost:5173/${db_data.slug}/${get_random_string()}`;

		// Send data to db
		await new_plan(db_data).catch((e) => {
			console.error('ERROR: Creating new plan failed');
			console.error(e.errInfo.details.schemaRulesNotSatisfied[0]);
		});

		return JSON.parse(
			JSON.stringify({
				status: 'success',
				data: db_data
			})
		);
	}
};
