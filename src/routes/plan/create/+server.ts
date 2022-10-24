// import { json } from '@sveltejs/kit';
// import type { RequestHandler } from './$types';
import db from '$db/mongo';

// export const POST: RequestHandler = async ({request}) => {
//   const plan = await request.json()
//   return json(plan);
// }

db.createCollection('plans', {
	validator: {
		$jsonSchema: {
			bsonType: 'object',
			title: 'Plans Object Validation',
			required: ['title', 'welcome_message'],
			properties: {
				title: {
					bsonType: 'string',
					description: "'title' must be a string and is required"
				},
				welcome_message: {
					bsonType: 'object',
					title: 'Welcome Messages',
					description: "'welcome_message' must be a object and is required",
					required: ['admin', 'user'],
					properties: {
						admin: {
							bsonType: 'object',
							title: 'Welcome Messages Admin',
							description: "'admin' must be a object and is required",
							required: ['title', 'description'],
							properties: {
								heading: {
									bsonType: 'string',
									description: "'heading' must be a string and is required"
								},
								description: {
									bsonType: 'string',
									description: "'description' must be a string and is required"
								}
							}
						},
						user: {
							bsonType: 'object',
							title: 'Welcome Messages User',
							description: "'user' must be a object and is required",
							required: ['title', 'description'],
							properties: {
								heading: {
									bsonType: 'string',
									description: "'heading' must be a string and is required"
								},
								description: {
									bsonType: 'string',
									description: "'description' must be a string and is required"
								}
							}
						}
					}
				},
				links: {
					bsonType: 'object',
					title: 'Links',
					description: "'links' must be a object and is required",
					required: ['admin', 'user'],
					properties: {
						admin: {
							bsonType: 'hostname',
							description: "'admin' must be a hostname and is required"
						},
						user: {
							bsonType: 'hostname',
							description: "'user' must be a hostname and is required"
						}
					}
				},
				block: {
					bsonType: 'object',
					title: 'Block',
					description: "'block' must be a object and is required",
					required: ['title'],
					properties: {
						title: {
							bsonType: 'string',
							description: "'title' must be a string and is required"
						},
						date: {
							bsonType: 'date',
							description: "'date' must be a date in ISO8601 format - for example, 2018-11-13"
						},
						time: {
							bsonType: 'time',
							description: "'time' must be a time ISO8601 format - for example, 20:20:39+00:00"
						},
						count: {
							bsonType: 'object',
							required: ['current', 'needed'],
							properties: {
								current: {
									bsonType: 'int',
									description: "'current' must be a int"
								},
								needed: {
									bsonType: 'int',
									description: "'needed' must be a int"
								}
							}
						},
						blocks: {
							bsonType: 'array',
							description: "'blocks' must be a array of blocks",
							items: {
								$ref: '#/properties/block'
							}
						}
					}
				}
			}
		}
	}
});
