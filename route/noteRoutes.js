import { Router } from 'express';
import { Note } from '../models';
import { validation, authorization } from '../middlewares';

const app = Router();

 /**
 * @route   GET note/
 * @desc    Return all notes
 * @access  Public
 */
app.route('/')
	.get(validation, authorization, (req, res) => {
		Note.find({})
			.then(note => res.json(note) )
			.catch(e => res.status(404).json({ message: 'Note not found!' }));
	});


 /**
 * @route   POST note/create
 * @desc    Creates new note
 * @access  Private
 */
app.route('/create')
	.post(validation, authorization, (req, res) => {
		const { author, title, body, topic } = req.body;

		new Note({ author, title, body, topic })
			.save()
			.then((note) => {
				return res.json({ message: 'You note has been published!', note })
			})
			.catch(e => res.json(e));
	});


app.route('/:id')  // find by id

/**
 * @route   GET note/:id
 * @desc    Returns a note
 * @access  Public
 */
	.get(validation, authorization, (req, res) => {
		const { id } = req.params;
		Note.findById(id)
			.then(note => res.json(note) )
			.catch(e => res.status(404).json({ message: 'Note not found!' }));
	})


/**
 * @route   PUT note/:id
 * @desc    Updates a note
 * @access  Private
 */
	.put(validation, authorization, (req, res) => {
		const { id } = req.params;
		const { title, body, topic } = req.body;
		Note.findById(id)
			.then(note => {
				note.title = title;
				note.body = body;
				note.topic = topic;
				note.save()
					.then(saveNote => res.json({ success: true, saveNote }))
					.catch(e => res.status(500).json(e));
			})
			.catch(e => res.status(404).json({ message: 'Note not found!' }));
	})



export default app;
