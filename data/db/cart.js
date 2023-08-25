const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    Name: String,
    Price: Number,
    Category: String,
    Company: String
});

module.exports = mongoose.model("Cart", cartSchema);