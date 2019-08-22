import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  bio: { type: String, default: '' },
  dataJoined: { type: Date, default: Date.now },
  followers: [
  	{
  		type: 'ObjectId', ref: 'User',
  	}
  ],
  following: [
	  {
	  	type: 'ObjectId', ref: 'User',
	  }
  ],
  followed_topic: [{ type: String }],
});


export default mongoose.model('User', UserSchema);
