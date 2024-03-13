const express = require('express');

// Import the contact controller module
const {
    createContact,
    getContactsByUserId,
    getContactByNameandUserId,
    updateContactById,
    deleteContactById
} = require('../controller/contactController');

// Create a new router object
const router = express.Router();


// Define a POST route for creating a new contact
// When a POST request is made to '/create', the createContact function from contactController is called
router.post('/contact/create', createContact);

// Define a GET route for getting all contacts by userId
// When a GET request is made to '/contacts', the getContactsByUserId function from contactController is called
router.get('/contact/getContact', getContactsByUserId);

// Define a GET route for getting a contact by their name and userId
// When a GET request is made to '/contact/:name/:userId', the getContactByNameandUserId function from contactController is called
router.get('/contact/getUserIdandName/:contactName', getContactByNameandUserId);

// Define a PUT route for updating a contact by their ID
// When a PUT request is made to '/update/:id', the updateById function from contactController is called
router.put('/contact/update/:id', updateContactById);

// Define a DELETE route for deleting a contact by their ID
// When a DELETE request is made to '/delete/:id', the deleteById function from contactController is called
router.delete('/contact/delete/:id', deleteContactById);

// Export the router object
module.exports = router;