// Import the mongoose module
const mongoose = require('mongoose');

// Get the Schema constructor from mongoose
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    // The name of the item, required field
    name: { type: String, required: true, unique: true},

    // The description of the item
    description: { type: String, required: true },

    // The price of the item
    price: { type: Number, required: true},

    // The quantity of the item
    quantity: { type: Number, required: true},

    // The group of the item
    group: { type: String, required: true},
});

// Export the User model, which can be used in other parts of the application
module.exports =  mongoose.model('Item', itemSchema);