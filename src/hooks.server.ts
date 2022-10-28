import { update_collection_plans } from '$db/serviceCollections';
import { start_mongo } from '$db/mongo';

start_mongo()
	.then(async () => {
		console.log('Mongo started');

		// Update schema for plans collection
		const command = await update_collection_plans();
		console.log(command);
	})
	.catch((e) => {
		console.error(e);
	});
