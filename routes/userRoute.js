// Import the express module
const express = require('express');

// Import the user controller module
const {
    registerUser,
    loginUser,
    logoutUser,
    updateUserById,
    deleteUserById
} = require('../controllers/userController');

// Create a new router object
const router = express.Router();

// Define a POST route for registering a new user
// When a POST request is made to '/register', the registerUser function from userController is called
router.post('/user/register', registerUser);

// Define a POST route for logging in a user
// When a POST request is made to '/login', the loginUser function from userController is called
router.post('/user/login', loginUser);

// Define a POST route for logging out a user
// When a POST request is made to '/logout', the logoutUser function from userController is called
router.post('/user/logout', logoutUser);

// Define a PUT route for updating a user by their ID
// When a PUT request is made to '/update/:id', the updateById function from userController is called
router.put('/user/update/:id', updateUserById);

// Define a DELETE route for deleting a user by their ID
// When a DELETE request is made to '/delete/:id', the deleteById function from userController is called
router.delete('/user/delete/:id', deleteUserById);

// Export the router object
module.exports = router;