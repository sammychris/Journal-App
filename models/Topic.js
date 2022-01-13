import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const TopicSchema = mongoose.Schema({
	topic: { type: String, required: true },
	notes: [{ type: ObjectId, ref: 'Note' }],
	followers: [{ type: ObjectId, ref: 'User' }],
	createdBy: { type: ObjectId, ref: 'User' },
  	updatedBy: { type: ObjectId, ref: 'User' },
}, {timestamps: true});

export default mongoose.model('Topic', TopicSchema);
