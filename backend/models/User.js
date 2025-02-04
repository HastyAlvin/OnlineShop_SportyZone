const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Tên người dùng không được để trống"],
    },
    email: {
      type: String,
      required: [true, "Email không được để trống"],
    },
    password: {
      type: String,
      required: [true, "Mật khẩu không được để trống"],
      min: [6, "Mật khẩu phải dài hơn 6 chữ số"],
    },
    role: {
      type: String,
      required: [true, "Role không được để trống"],
    },
    full_name: {
      type: String,
      required: [true, "Tên đầy đủ không được để trống"],
    },
    phone_number: {
      type: String,
    },
    address: {
      type: String,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
