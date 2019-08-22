import { Router } from 'express';
import { Note, NoteTopic } from '../models';

const app = Router();


const token_validation = (req, res, next) => {
	// Nothing for now...
	console.log('The main cause of life');
	next();
}


app.route('/newtopic')
	.post(token_validation, (req, res) => {
		for ( let key in req.body ) {
			if (!req.body[key].trim()) return res.json({ message: 'This is so wrong!'});
		}
	
		new NoteTopic({ topic: req.body.topic })
			.save()
			.then((note) => {
				return res.json({ message: 'You note has been published!', note })
			})
			.catch(e => res.json(e));
	});


app.route('/create')
	.post(token_validation, (req, res) => {

		for ( let key in req.body ) {
			if (!req.body[key].trim()) return res.json({ message: 'This is so wrong!'});
		}
		
		const { title, body, author, topic, topic_id } = req.body;

		NoteTopic.findById(topic_id)
			.then((noteTopic) => {
				new Note({ title, body, author, topic })
					.save()
					.then((note) => {
						NoteTopic.notes.push(note);
						return res.json({ message: 'You note has been published!', note })
					})
					.catch(e => res.json(e));
			})
	});



export default app;
