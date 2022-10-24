import { MongoClient } from 'mongodb';
import { DATABASE, DATABASE_PASSWORD } from '$env/static/private';

const db_uri = DATABASE.replace('<PASSWORD>', DATABASE_PASSWORD);

const client = new MongoClient(db_uri);

export function start_mongo(): Promise<MongoClient> {
	console.log('Starting mongo...');
	return client.connect();
}

export default client.db();
