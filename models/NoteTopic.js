import mongoose from 'mongoose';

const TopicSchema = mongoose.Schema({
	topic: { type: String, required: true },
  notes: [],
  followers: [],
});

export default mongoose.model('Topic', TopicSchema);
