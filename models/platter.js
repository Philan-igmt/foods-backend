const mongoose = require('mongoose');
const Schema = mongoose.Schema;

platterSchema = new Schema( {
	name:{
        type: String,
        required: true,
      },
    price:{
        type: Number,
        required: true,
      },
    description:{
        type: String,
        required: true,
      },
    image: {
        type: String,
        required: true,
      },
    count:{
        type:Number,
        default:1
    }
}),
Platter = mongoose.model('Platters', platterSchema);

module.exports = Platter;