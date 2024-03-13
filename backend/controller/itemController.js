//import necessary modules
const Item = require('../models/item');

// Define a function to get all items by user id
const getAllItemsByUserId = async (req, res) => {
    return res.send('Get all items by user id');
}

// Define a function to get an item by user id and name
const getItemByUserIdandName = async (req, res) => {
    return res.send('Get item by user id and name');
}

// Define a function to create an item
const createItem = async (req, res) => {
    res.send('Create an item');
}

// Define a function to update an item by id
const updateItemById = async (req, res) => {
    res.send('Update an item by id');
}

// Define a function to delete an item by id
const deleteItemById = async (req, res) => {
    res.send('Delete an item by id');
}

// Export the functions
module.exports = {
    getAllItemsByUserId,
    getItemByUserIdandName,
    createItem,
    updateItemById,
    deleteItemById
}