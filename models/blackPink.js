const mongoose = require("mongoose");

const Schema = mongoose.Schema; //Create new schema from mongoose
const blackpinkSchema = new Schema(
  {
    //Define Blackpink schema
    name: {
      type: String,
      require: true,
      unique: true,
    },
    age: {
      type: Number,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    nation: {
      type: String,
      require: true,
    },
  },

  { timestamps: true }
);

const Blackpink = mongoose.model("blackpink", blackpinkSchema); //Create new model from schema
module.exports = Blackpink;
