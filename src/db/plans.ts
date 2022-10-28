import type { InsertOneResult, ObjectId } from 'mongodb';
import db from '$db/mongo';

interface Plan {
	title: string;
	urls: {
		admin: string;
		share: string;
	};
	welcome_messages: {
		admin: {
			heading: string;
			description: string;
		};
		user: {
			heading: string;
			description: string;
		};
	};
	dates: [
		{
			title: string;
			date: string;
			locations: [
				{
					title: string;
					times: [
						{
							title: string;
							time: string;
							person_count: {
								needed: number;
								current: number;
							};
							persons: [ObjectId];
						}
					];
				}
			];
		}
	];
}

export function new_plan(data: Plan): Promise<InsertOneResult<Document>> {
	return db.collection('plans').insertOne(data);
}
