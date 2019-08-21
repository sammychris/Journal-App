import { Router } from 'express';
import { User } from '../models';

const app = Router();
const saltRounds = 10;

app.route('/register')
	.post((req, res) => {

	});

app.route('/login')
	.post((req, res) => {
		console.log('Testing the backend');
		res.send('test!')
	});

export default app;
