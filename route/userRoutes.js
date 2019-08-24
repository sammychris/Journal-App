import { Router } from 'express';
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId
import { User } from '../models';

const app = Router();

app.route('/:id')

/**
 * @route   GET user/:id
 * @desc    Returns user data
 * @access  Public
 */
	.get((req, res) => {
		const { id } = req.params;
		User.findById(id)
			.then(user => res.json(user))
			.catch(e => res.status(404).json({ message: 'User not found!' }));
	})


/**
 * @route   PUT user/:id
 * @desc    update 
 * @access  Private
 */
	.put((req, res) => {
		const { id } = req.params;
		const { bio } = req.body;
		User.findById(id)
			.then(user => {
				user.bio = bio;
				user.save()
					.then((saveUser) => res.json({ message: 'User updated!' }))
					.catch(e => res.json(e));
			})
			.catch(e => res.status(404).json({ message: 'User not found!' }));
	})


/**
 * @route   POST user/follow
 * @desc    follow a user
 * @access  Public
 */
app.route('/follow')
 .post((req, res) => {

 	const { author_email, user_id  } = req.body;

 	User.findOne({ email: author_email })
 		.then((author) => {

 			// Checking if User is Already following Author...
 			const check = author.followers.join(' ').includes(user_id);
 			if (check) return res.json({ message: 'User already in followers list!' });

 			// Proceed with adding user to author's followers list
 			// And add an author to user's following list...
 			User.findById(user_id)
 				.then(user => {

 					author.followers.push(user._id); // save user id
 					user.following.push(author._id); // save author id
 					author.save()
 						.then((saveAuthor) => {
 							user.save()
 								.then((saveUser) => {
 									res.json({ message: 'Follow Successfull', user: saveUser, author: saveAuthor});
 								})
 								.catch(e => res.json('User not saving.'))
 						})
 						.catch(e => res.json('Author not saving.'))
 				})
 				.catch(e => res.json('User does not exists!'))

 		})
 		.catch(e => res.json('Author does not exists!'))

 })


 /**
 * @route   POST user/topic
 * @desc    follow a topic
 * @access  Private
 */
app.route('/topic')
	.put((req, res) => {
		const { user_id, topic } = req.body;

		User.findById(user_id)
			.then(user => {

				// Checking if topic is already followed by the user...
				const check = author.followed_topic.join(' ').includes(topic);
				if (check) return res.json({ message: 'Topic already followed!' });

				// Proceed with adding topic to user's followed_topic list...
				user.followed_topic.push(topic);

				user.save()
					.then((saveUser) => res.json({ message: 'Topic added!' }))
					.catch(e => res.json(e));
			})
			.catch(e => res.status(404).json({ message: 'User not found!' }));
	})

export default app;
