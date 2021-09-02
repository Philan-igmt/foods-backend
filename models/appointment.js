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
  email: {
    type: String,
    required: true,
  },
  cellphoneNumber: {
    type: String,
    required: true,
  },
  option: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  slot: {
    type: String,
    required: true,
  },


  
});

module.exports = mongoose.model("User_Appointment", AppointmentSchema);