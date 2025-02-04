const mongoose = require("mongoose");
const { Schema } = mongoose;

const shoppingCartSchema = new Schema(
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
    quantity: {
      type: Number,
      required: [true, "Số lượng sản phẩm không được để trống"],
      max: [9, "số lượng bé hơn 1 tỷ"],
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const ShoppingCarts = mongoose.model("ShoppingCarts", shoppingCartSchema);
module.exports = ShoppingCarts;
