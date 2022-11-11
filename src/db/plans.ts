import type { InsertOneResult, ObjectId } from 'mongodb';
import db from '$db/mongo';

export interface Message {
	[key: string]: {
		heading: string;
		text: string;
	};
}

export interface Plan_Defaults {
	messages: {
		admin: Message;
		user: Message;
	};
}

export interface Plan {
	title: string;
	urls: {
		admin: string;
		share: string;
	};
	slug: string;
	dates?: [
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
