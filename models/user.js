const mongoose = require("mongoose");
const Schema = mongoose.Schema; //Create new schema from mongoose

const userSchema = new Schema(
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

const Users = mongoose.model("user", userSchema); //Create new model from schema
module.exports = Users;
