const mongoose = require("mongoose");
const Schema = mongoose.Schema; //Create new schema from mongoose

const memberSchema = new Schema(
  {
    //Define user schema
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    name : {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);

const Member = mongoose.model("meber", memberSchema); //Create new model from schema
module.exports = Member;
