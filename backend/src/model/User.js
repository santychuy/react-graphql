import { Schema, model } from 'mongoose';

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	fullname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
});

export default model('User', userSchema, 'Users');
