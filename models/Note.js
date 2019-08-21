import mongoose from 'mongoose';

const NoteSchema = mongoose.Schema({
  title: { type: String, required: true },
  body:  { type: String, required: true },
  author: { type: 'ObjectId', ref: 'User' },
  topic: { type: 'ObjectId', ref: 'Topic' },
  created_on: { type: Date, default: Date.now },
})


export default mongoose.model('Note', NoteSchema);
