const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema( {
	
	unique_id: {
		type:String,
		default: Math.floor(Math.random() * 10)
	},
	email: String,
	username: String,
	password: String,
	passwordConf: String,
	createdAt: {
		type: Date,
		default: Date.now
	}
}),
User = mongoose.model('User', userSchema);

module.exports = User;