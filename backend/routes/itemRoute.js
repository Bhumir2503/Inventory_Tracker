const express = require('express');

const {
    getAllItemsByUserId,
    getItemByUserIdandName,
    createItem,
    updateItemById,
    deleteItemById
} = require ('../controller/itemController');


const router = express.Router();

router.get('/item/:userId', getAllItemsByUserId);

router.get('/item/:userId/:name', getItemByUserIdandName);

router.post('/item/create', createItem);

router.put('/item/update/:id', updateItemById);

router.delete('/item/delete/:id', deleteItemById);

module.exports = router;