const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  role: {
    required: true,
    type: String,
  },
  status: {
    required: true,
    type: Boolean,
  },
});

module.exports = mongoose.model("User", userSchema);
