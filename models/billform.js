const mongoose = require("mongoose");

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
    default:Date.now()
  },
  deliveryTime: {
    type: Number,
    required: true,
    default:Date.now()
  },
  option: {
    type: Boolean,
    required: true,
    default:false,
  },
  
});

module.exports = mongoose.model("Order", BillSchema);