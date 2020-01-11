import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const NoteSchema = mongoose.Schema({
    // topic: { type: ObjectId, ref: 'Topic'},
    title: { type: String, required: true },
    // type:  { type: String, enum: ['private', 'public'] },
    body:  { type: String, required: true },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedBy: { type: ObjectId, ref: 'User' },
}, {timestamps: true});


export default mongoose.model('Note', NoteSchema);
