const mongoose = require("mongoose");
const { Schema } = mongoose;

const testSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    default: "",
  },
  nickname: {
    type: String,
    max: [20, "Your nickname's can't be more than 20 characters"],
    default: "",
  },
  dob: {
    type: Date,
    validate: {
      validator: function (value) {
        value < this.now;
      },
      message:
        "Date of birth must be greater than today time at least 18 years",
    },
    default: "",
  },
});

const Test = mongoose.model("tests", testSchema);

module.exports = Test;
