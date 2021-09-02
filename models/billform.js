const mongoose = require("mongoose");

const Cart = mongoose.Schema({ item: String });
const BillSchema = mongoose.Schema({

  streetaddress: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  deliveryDate: {
    type: String,
    required: true,
  },
  deliveryTime: {
    type: String,
    required: true,
  },
  option: {
    type: String,
    required: true,
  },
  cart:{
    type:[Cart],
    default: undefined
  },
  total:{
    type:String,
    required: true,
  }
  
});

module.exports = mongoose.model("Order", BillSchema);