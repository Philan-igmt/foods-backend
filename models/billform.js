const mongoose = require("mongoose");

const BillSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },

  streetaddress: {
    type: String,
    required: true,
  },

  town: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  postalcode: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cart: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Order", BillSchema);