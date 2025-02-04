const mongoose = require("mongoose");
const { Schema } = mongoose;

const auditLogSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Id người dùng không để trống"],
    },
    action: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: [true, "Mô tả không được để trống"],
    },
  },
  {
    timestamps: true,
  }
);

const AuditLogs = mongoose.model("AuditLogs", auditLogSchema);
module.exports = AuditLogs;
