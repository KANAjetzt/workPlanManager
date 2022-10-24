import db from '$db/mongo';

export const create_collection = db.createCollection('plans', {
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
							bsonType: 'string',
							// format: 'hostname',
							description: "'admin' must be a string of format hostname and is required"
						},
						user: {
							bsonType: 'string',
							// format: 'hostname',
							description: "'user' must be a string of format hostname and is required"
						}
					}
				},
				blocks: {
					bsonType: 'array',
					description: "'blocks' must be a array of blocks",
					items: {
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
								bsonType: 'string',
								// format: 'date',
								description:
									"'date' must be a string in ISO8601 date format - for example, 2018-11-13"
							},
							time: {
								bsonType: 'string',
								// format: 'date',
								description:
									"'time' must be a string in ISO8601 time format - for example, 20:20:39+00:00"
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
							sub_blocks: {
								bsonType: 'array',
								description: "'blocks' must be a array of blocks"
							}
						}
					}
				}
			}
		}
	}
});
