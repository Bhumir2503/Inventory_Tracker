// Import the mongoose module
const mongoose = require('mongoose');

// Get the Schema constructor from mongoose
const Schema = mongoose.Schema;

const folderSchema = new Schema({
    // The username of the user, required field
    userId: { type: String, required: true, unique: true},

    //the name of the folder, required field
    folderName: { type: String, required: true, unique: true},
});

// Export the User model, which can be used in other parts of the application
module.exports =  mongoose.model('Folder', folderSchema);