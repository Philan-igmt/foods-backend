const mongoose = require('mongoose');
const Schema = mongoose.Schema;

orderSchema = new Schema( {
	cart:[{
		type: String
	}]
}),
Order = mongoose.model('Orders', orderSchema);

module.exports = Order;