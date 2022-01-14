const mongoose = require("mongoose");
const workersData = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  job: {
    type: String,
    required: true,
  },

  phoneNo: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});

const workersModel = mongoose.model("workersFile", workersData);
module.exports = workersModel;
