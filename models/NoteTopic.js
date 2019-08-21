import mongoose from 'mongoose';

const TopicSchema = mongoose.Schema({
  topic: { type: String, required: true },
  notes: [],
  followers: [],
  created_on: { type: Date, default: Date.now },
});

export default mongoose.model('Topic', TopicSchema);
