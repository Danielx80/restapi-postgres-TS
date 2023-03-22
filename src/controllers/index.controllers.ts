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
	const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
	return res.json(response.rows);
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
	const { name, email } = req.body
	await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
	return res.status(201).json({
		message: 'User created Succesfully',
		user: {
			email,
			name
		}
	});
}

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
	const id = parseInt(req.params.id);
	const { name, email } = req.body;
	await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
	return res.json({
		message: 'User update succesfully',
		user: {
			id,
			name,
			email,
		}
	})
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
	const id = parseInt(req.params.id)
	await pool.query('DELETE FROM users WHERE id = $1', [id])
	return res.status(200).json(`User ${id} delete succesfully`)
}