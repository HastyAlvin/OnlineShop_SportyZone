const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Id người dùng không để trống"],
    },
    total_amount: {
      type: Number,
      required: [true, "Giá không được để trống"],
      max: [9, "giá bé hơn 1 tỷ"],
    },
    status: {
      type: String,
    },
    shipping_address: {
      type: String,
      required: [true, "Địa chỉ ship không được để trống"],
    },
    payment_method: {
      type: String,
      required: [true, "Cách thức thanh toán không được để trống"],
    },
  },
  {
    timestamps: true,
  }
);

const Orders = mongoose.model("Orders", orderSchema);
module.exports = Orders;
