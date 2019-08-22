import mongoose from 'mongoose';

const NoteSchema = mongoose.Schema({
	topic: { type: String, required: true },
  title: { type: String, required: true },
  body:  { type: String, required: true },
  author: { type: 'ObjectId', ref: 'User' },
  created_on: { type: Date, default: Date.now },
})


export default mongoose.model('Note', NoteSchema);
