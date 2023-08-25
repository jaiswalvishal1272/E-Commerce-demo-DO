const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Name: String,
    Price: Number,
    Category: String,
    Company: String
});


module.exports = mongoose.model("products", productSchema);