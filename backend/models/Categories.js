const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Tên thể loại không được để trống"],
    },
    description: {
      type: String,
      required: [true, "Mô tả thể loại không được để trống"],
    },
  },
  {
    timestamps: true,
  }
);

const Categories = mongoose.model("Categories", categorySchema);
module.exports = Categories;
