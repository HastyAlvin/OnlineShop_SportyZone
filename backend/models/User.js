const mongoose = require("mongoose");
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
        type: Number,
        required: [true, "Role không được để trống"],
      },
      groupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Group,
      },
      semesterId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Semester" }],
      isLeader: { type: Boolean, default: "false" },
      status: {
        type: String,
        enum: ["Active", "InActive", "Disabled", "Pending"],
        default: "InActive",
      },
      rollNumber: { type: String },
      memberCode: { type: String },
      major: { type: String },
    },
    {
      timestamps: true,
    }
  );
  
  const User = mongoose.model("User", userSchema);
  module.exports = User;