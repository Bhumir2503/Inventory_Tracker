
// Import the mongoose module
const mongoose = require('mongoose');

// Get the Schema constructor from mongoose
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // The username of the user, required field
    username: { type: String, required: true, unique: true},

    // The password of the user, required field
    password: { type: String, required: true },

    // The email of the user, required field
    email: { type: String, required: true, unique: true},

    // The date when the user was added, defaults to the current date and time
    dateCreated: { type: Date, default: Date.now }
});

// Export the User model, which can be used in other parts of the application
module.exports =  mongoose.model('User', userSchema);