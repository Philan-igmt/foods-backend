const mongoose = require("mongoose");

const AppointmentSchema = mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  cellphoneNumber: {
    type: Number,
    required: true,
  },
  option: {
    type: [String],
    required: true,
    default:["google"]
  },
  reason: {
    type: String,
    required: true,
  },
  slot: {
    type: Date.now(),
    required: true,
  },


  
});

module.exports = mongoose.model("Order", AppointmentSchema);