const mongoose = require("mongoose");

const AdminAppointmentSchema = mongoose.Schema({

  date: {
    type: Date,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model("Admin_Appointment", AdminAppointmentSchema);