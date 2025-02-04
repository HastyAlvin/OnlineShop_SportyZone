const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderItemSchema = new Schema(
  {
    order_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Orders",
      required: [true, "Id đơn hàng không để trống"],
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      required: [true, "Id sản phẩm không để trống"],
    },
    price: {
      type: Number,
      required: [true, "Giá sản phẩm không được để trống"],
      max: [9, "giá bé hơn 1 tỷ"],
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

const OrderItems = mongoose.model("OrderItems", orderItemSchema);
module.exports = OrderItems;
