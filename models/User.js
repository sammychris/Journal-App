import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;


const UserSchema = mongoose.Schema({
    name:  { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    bio: { type: String, default: '' },
    followers: [{ type: ObjectId, ref: 'User' }],
    following: [{ type: ObjectId, ref: 'User' }],
    followed_topic: [{ type: ObjectId, ref: 'Topic' }],
    createdBy: { type: ObjectId, ref: 'User' },
    updatedBy: { type: ObjectId, ref: 'User' },
}, {timestamps: true});


export default mongoose.model('User', UserSchema);
