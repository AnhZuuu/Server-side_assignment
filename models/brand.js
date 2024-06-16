const mongoose = require("mongoose");
const Schema = mongoose.Schema; //Create new schema from mongoose

const brandSchema = new Schema({
    brandName: {
        type: String
    }
}, { timestamps: true });

const brand = mongoose.model('brand', brandSchema);
module.exports = brand;