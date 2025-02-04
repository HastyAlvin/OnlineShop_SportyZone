const mongoose = require("mongoose");
const { Schema } = mongoose;

const ratingSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Id người dùng không để trống"],
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      required: [true, "Id sản phẩm không để trống"],
    },
    rating: {
      type: Number,
      required: true,
      min: [0, "Đánh giá thấp nhất 0 sao"],
      max: [5, "Đánh giá cao nhất 5 sao"],
    },
    comment: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Ratings = mongoose.model("Ratings", ratingSchema);
module.exports = Ratings;
