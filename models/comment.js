const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    commenterName: {
      type: String,
      required: true,
    },
    commentBody: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
