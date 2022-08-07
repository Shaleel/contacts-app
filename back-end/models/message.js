const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    recipient_name: {
      type: String,
      required: true,
      maxLength: 32,
      trim: true,
    },
    recipient_mobile: {
      type: String,
      required: true,
      maxLength: 15,
      trim: true,
    },
    recipient_email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    otp: {
      type: String,
      required: true,
      maxLength: 6,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
