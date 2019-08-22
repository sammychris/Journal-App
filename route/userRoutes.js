import { Router } from 'express';
import { User } from '../models';

const app = Router();

app.route('/:id')
	.get((req, res) => {
		const { id } = req.params;
		User.findById(id)
			.then(user => res.json(user))
			.catch(e => res.status(404).json({ message: 'User not found!' }));
	})

export default app;
