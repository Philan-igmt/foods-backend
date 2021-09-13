const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema( {
	email: String,
	username: String,
	password: String,
	passwordConf: String,
	createdAt: {
		type: Date,
		default: Date.now
	},
	role:{
		type:String,
		default:"USER"
	}
}),
User = mongoose.model('Users', userSchema);

module.exports = User;