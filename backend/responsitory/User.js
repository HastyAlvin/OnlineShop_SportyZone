import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Mã hóa mật khẩu trước khi lưu vào DB
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);

export default class UserDAO {
  // Tạo user mới
  static async registerUser(userData) {
    try {
      const user = new User(userData);
      await user.save();
      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Đăng nhập user
  static async loginUser(username, password) {
    try {
      const user = await User.findOne({ username });
      if (!user) return { success: false, message: "User not found" };

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return { success: false, message: "Invalid password" };

      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
