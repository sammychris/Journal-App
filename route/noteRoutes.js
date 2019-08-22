import { Router } from 'express';
import { Note } from '../models';

const app = Router();


const token_validation = (req, res, next) => {
	// Nothing for now...
	for ( let key in req.body ) {
		req.body[key] = req.body[key].trim().toLowerCase();
		if (!req.body[key]) return res.json({ message: 'No empty field!'});
	}
	next();
}


// app.route('/newtopic')
// 	.post(token_validation, (req, res) => {		
// 		const { topic } = req.body;

// 		NoteTopic.findOne({ topic })
// 			.then((foundTopic) => {
// 				if (foundTopic) return res.json({ message: 'Topic already exists' });
// 				new NoteTopic({ topic })
// 					.save()
// 					.then((note) => {
// 						return res.json({ message: 'You note has been published!', note })
// 					})
// 					.catch(e => res.json(e));
// 			})
// 	});


app.route('/create')
	.post(token_validation, (req, res) => {		
		const { author, title, body, topic } = req.body;

		new Note({ author, title, body, topic })
			.save()
			.then((note) => {
				return res.json({ message: 'You note has been published!', note })
			})
			.catch(e => res.json(e));
	});

app.route('/:id')
	.get(token_validation, (req, res) => {
		const { id } = req.params;
		Note.findById(id)
			.then(user => {
				res.json({user});
			})
			.catch(e => res.status(404).json(e));
	});



export default app;
