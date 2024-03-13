// Import the mongoose module
const mongoose = require('mongoose');

// Get the Schema constructor from mongoose
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    // The username of the user, required field
    userId: { type: String, required: true},

    //the name of the contact, required field
    contactName: { type: String, required: true},

    //the phone number of the contact
    contactPhone: { type: String},

    //the Job Title of the contact
    contactJobTitle: { type: String},

    //the company of the contact
    contactCompany: { type: String},

    //the email of the contact, required field
    contactEmail: { type: String},
});

// Export the User model, which can be used in other parts of the application
module.exports =  mongoose.model('Contact', contactSchema);