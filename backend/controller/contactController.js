//import necessary modules
const Contact = require('../models/contact');
const jwt = require('jsonwebtoken');

// Define a function to handle creating a new contact
const createContact = async (req, res) => {
    // Create a new contact object
    const newContact = new Contact({
        userId: req.body.userId,
        contactName: req.body.contactName,
        contactPhone: req.body.contactPhone,
        contactJobTitle: req.body.contactJobTitle,
        contactCompany: req.body.contactCompany,
        contactEmail: req.body.contactEmail
    });

    // Save the contact to the database
    await Contact.create(newContact);

    // Send a response
    res.status(200).json("Contact Created");
}

// Define a function to handle getting all contacts
const getContactsByUserId = async (req, res) => {
    //get token from the request header authorization
    const token = req.headers.authorization;
    //get the userId from the token
    const payload = token.split(" ")[1];

    //decode the payload to get the userId
    const decoded = jwt.decode(payload, process.env.JWT_SECRET);

    // Get all contacts by userId
    const contacts = await Contact.find({ userId: decoded.id });

    // Send a response
    res.status(203).json(contacts);

}

// Define a function to handle getting a contact by their name and userId
const getContactByNameandUserId = async (req, res) => {

    const token = req.headers.authorization;

    const payload = token.split(" ")[1];

    const decoded = jwt.decode(payload, process.env.JWT_SECRET);

    const contact = await Contact.find({
        userId: decoded.id,
        contactName: { $regex: new RegExp("^" + req.params.contactName.toLowerCase(), "i") }
    });
    // Send a response
    res.status(203).json(contact);
}

// Define a function to handle updating a contact by their ID
const updateContactById = async (req, res) => {
    // Update a contact by their ID
    res.send("updateContactById");
}
// Define a function to handle deleting a contact by their ID
const deleteContactById = async (req, res) => {
    // Delete a contact by their Id
    const contact = await Contact.findByIdAndDelete(req.params.id);
}

// Export the functions
module.exports = {
    createContact,
    getContactsByUserId,
    getContactByNameandUserId,
    updateContactById,
    deleteContactById
}