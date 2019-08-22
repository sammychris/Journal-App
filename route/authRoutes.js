import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Router } from 'express';
import { User } from '../models';


require('dotenv').config();
const app = Router();
const saltRounds = 10;

app.route('/register')

	.post((req, res) => {

		const { name, email, password } = req.body;

		User.findOne({ email })
			.then((user) => {
				if (user) {
					// Already Registered!
					return res.json({message: 'user already exists!', success: false });
				}

				const newUser = new User({ name, email });

				// hash my password!
				bcrypt.hash(password, saltRounds)
					.then((hash) => {
						newUser.password = hash;
						newUser.save()
							.then(saveUser => res.json(saveUser))
							.catch(e => res.status(400).json(e));
					})
					.catch(e => res.status(400).json(e));
			})
			.catch(e => res.status(500).json(e));
	});


app.route('/login')

	.post((req, res) => {

		const { email, password } = req.body;

		User.findOne({ email })
			.then((user) => {
				if (!user) {
					// User not found!
					return res.json({ message: 'User does not exists!', success: false });
				}
				// comparing password!
				bcrypt.compare(password, user.password)
					.then((compare) => {
						if (!compare) {
							// Password is not true
							return res.json({ message: 'Wrong password!', success: false });
						}

						const payload = {
                id: user._id,
                name: user.name,
                email: user.email,
            };

						jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '2 days' }, (err, token) => {
								if (err) return console.log(err);
								return res.json({ message: 'Loggedin successful!', token });
							})
					})
					.catch(e => res.status(400).json(e));

			})
			.catch(e => res.status(500).json(e));
	});

export default app;
