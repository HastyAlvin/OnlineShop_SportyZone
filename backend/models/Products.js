const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Tên sản phẩm dùng không được để trống"],
    },
    description: {
      type: String,
      required: [true, "Mô tả sản phẩm không được để trống"],
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
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
      required: [true, "Tên thể loại sản phẩm không được để trống"],
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("Products", productSchema);
module.exports = Products;