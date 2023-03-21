import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { pool } from '../database';

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
	try {
		const response: QueryResult = await pool.query('SELECT * FROM users');
		return res.status(200).json(response.rows);
	} catch (error) {
		console.log(error);
		return res.status(500).json('Internal Server error');
	}
}

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
	const id = parseInt(req.params.id);
	const response:QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
	return res.json(response.rows);
}

// export const createUser = async (req: Request, res: Response): Promise<Response> => {
// 	return (
		
// 	)
// }
// export const updateUser = async (req: Request, res: Response): Promise<Response> => {
// 	return (
		
// 	)
// }
// export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
// 	return (
		
// 	)
// }