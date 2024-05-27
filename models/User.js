const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    //   unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },


    role: {
      type: String,
      default: "user",
    },
    isPremium:{
      type:Boolean,
      default:false,
    },
    bookings: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Booking",
      },
    ],
  },
  { timestamps: true }
);
const User=mongoose.model("User", userSchema);
module.exports=User;