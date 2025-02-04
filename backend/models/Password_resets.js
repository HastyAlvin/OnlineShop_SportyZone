const mongoose = require("mongoose");
const { Schema } = mongoose;

const passwordResetSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Id người dùng không để trống"],
    },
    serect_key: {
      type: String,
      required: [true, "Mật khẩu đã mã hóa không đọc được"],
    },
    is_enabled: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const PasswordResets = mongoose.model("PasswordResets", passwordResetSchema);
module.exports = PasswordResets;
