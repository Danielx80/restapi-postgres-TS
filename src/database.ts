import { Pool } from 'pg';

export const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	password: '123456',
	database: 'firstapits',
	port: 5432
});