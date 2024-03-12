// Import necessary modules
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const saltRounds = 10;

// Define a function to handle user registration
const registerUser = async (req, res) => {
    const { username, password, email } = req.body

    // Check if a user with the same username already exists
    const userExist = await User.findOne({username});

    // Check if a user with the same email already exists
    const emailExist = await User.findOne({email});

    // If a user with the same username exists, send an error response
    if(userExist){
        res.status(400).json("User already exists");
    }
    
    // If a user with the same email exists, send an error response
    else if(emailExist){
        res.status(400).json("Email already exists");
    }
    
    // If no user with the same username or email exists, hash the password    
    else{
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user with the hashed password
        const newUser = new User({
            username,
            password: hashedPassword,
            email
        });

        // Save the new user to the database
        await User.create(newUser);

        // Create a JWT for the new user
        const token = jwt.sign(
            {username: newUser.username}, // payload
            process.env.JWT_SECRET, // secret key
            { expiresIn: '3d' } // options
        );

        // Send the JWT as a cookie
        //change token name if needed
        res.cookie('token', token);
        res.status(200).json("User Created");
    }
}

// Define a function to handle user login
const loginUser = async (req, res) => {
    // Extract username and password from the request body
    const { username, password } = req.body;

    // Find the user with the given username
    const user = await User.findOne({username});

    // If no user with the given username exists, send an error response
    if(!user){
        return res.status(401).json("User does not exist");
    }

    // Check if the given password matches the user's password
    const validPassword = await bcrypt.compare(password, user.password);

    // If the password is invalid, send an error response
    if(!validPassword){
        return res.status(401).json("Invalid Password");
    }

    // If the password is valid, create a JWT for the user
    else{

        const token = jwt.sign(
            { id: user._id, username: user.username }, // payload
            process.env.JWT_SECRET, // secret key
            { expiresIn: '3d' } // options
        );

        // Send the JWT as a cookie
        //change token name if needed
        res.cookie('token', token);
        res.status(200).json("User Logged In");
    }
}

const verifyToken = async (req, res) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json("You need to Login");

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(401).json("You need to Login");
        }
        res.status(200).json(user);
    });

}

// Define a function to handle user logout
const logoutUser = async (req, res) => {
    // Clear the cookie containing the JWT
    res.clearCookie('token');
    res.status(200).json("User Logged Out");
}

// Update a user by ID
const updateUserById = async (req, res) => {
    const { id, username, email } = req.body;
    await User.findByIdAndUpdate(id, {username, email});
    res.status(200).json("User Updated");
};

// Delete a user by ID
const deleteUserById = async (req, res) => {
    const { id } = req.body;
    await User.findByIdAndDelete(id);
    res.status(200).json("User Deleted");
};

// Exporting the functions to be used in other modules
module.exports = {
    registerUser,
    loginUser,
    verifyToken,
    logoutUser,
    updateUserById,
    deleteUserById
};
