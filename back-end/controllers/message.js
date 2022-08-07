const Message = require("../models/message");
const createError = require("http-errors");
const twilio = require("twilio")(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKE
);
module.exports = {
  create: async (req, res, next) => {
    try {
      const { fullname, mobile, email, otp, message, image, countryCode } =
        req.body;

      if (!fullname || !mobile || !email || !otp || !image || !countryCode) {
        throw createError.BadRequest("Incomplete Details provided");
      }
      if (otp.length !== 6)
        throw createError.BadRequest("Invalid OTP provided");

      const messageBody = `Hi, Your OTP is ${otp} \n ${message}`;
      twilio.messages
        .create({
          from: "+16693222973", //number provided by twilio for trial
          to: `+${countryCode}${mobile}`,
          body: messageBody,
        })
        .then((res) => console.log(res))
        .catch((err) => {
          console.log(err);
          throw createError.InternalServerError("Unable to Send Message");
        });

      const newMessage = new Message({
        recipient_name: fullname,
        recipient_mobile: mobile,
        recipient_email: email,
        otp: otp,
        message: messageBody,
        image: image,
      });

      newMessage.save((err, resMessage) => {
        if (err) {
          console.log(err);
          throw createError.InternalServerError("Unable to save message");
        }
        return res.status(200).json({
          message: "Message sent successfully !",
        });
      });
    } catch (error) {
      next(error);
    }
  },
  list: async (req, res, next) => {
    try {
      const messageList = await Message.find().sort({ createdAt: -1 }).exec(); //fetching in descending order
      if (!messageList)
        throw createError.InternalServerError("Unable to get list of messages");
      return res.status(200).json(messageList);
    } catch (error) {
      next(error);
    }
  },
};
