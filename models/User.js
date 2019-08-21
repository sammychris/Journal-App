import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  bio: { type: String, default: '' },
  created_on: { type: Date, default: Date.now },
  followers: [],
  following: [],
  followed_topic: [],
  notes: [],
});


export default mongoose.model('User', UserSchema);
