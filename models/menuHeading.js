const mongoose = require("mongoose");

const MenuHeadingSchema = new mongoose.Schema({
  label: {
    required: true,
    type: String,
  },
  heading: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  status: {
    required: true,
    type: Boolean,
  },
});

module.exports = mongoose.model("MenuHeading", MenuHeadingSchema);
