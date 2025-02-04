const mongoose = require("mongoose");
const { Schema } = mongoose;

const twofactorauthSchema = new Schema(
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

const Twofactorauth = mongoose.model("Twofactorauth", twofactorauthSchema);
module.exports = Twofactorauth;
