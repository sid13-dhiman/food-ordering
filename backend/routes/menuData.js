const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const MenuData = require('../models/MenuData');
var fetchuser = require('../middleware/fetchuser');

//Get All Menu Data
router.get('/fetchmenudata', async (req, res) => {
    try {
        const menu = await MenuData.find();
        res.json(menu);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

//Add Menu
router.post('/addmenu', fetchuser, [
    body('name'),
    body('category'),
    body('price'),
    body('description'),
    body('file'),
], async (req, res) => {
    try {
        const { name, category, price, description, file } = req.body;
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const menuData = new MenuData({
            name, category, price, description, file, user: req.user.id
        })
        const savedMenu = await menuData.save()

        res.json({ message: "Menu item added successfully", data: savedMenu });
    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }

})

router.put('/updatemenu/:id', fetchuser, [
    body('name'),
    body('category'),
    body('price'),
    body('description'),
    body('file'),
], async (req, res) => {
    const { name, category, price, description, file } = req.body;

    try {

        const newMenu = {};
        if (name) { newMenu.name = name };
        if (category) { newMenu.category = category };
        if (price) {newMenu.price = price};
        if (description) { newMenu.description = description };
        if (file) { newMenu.file = file };

        //  Find the note to be updated and update it
        let menu = await MenuData.findById(req.params.id);
        console.log('Menu:', menu);

        if (!menu) { return res.status(404).send("Not Found") }

        // if (menu.user.toString() !== req.user.id) {
        //     return res.status(401).send("Not Allowed");
        // }
        menu = await MenuData.findByIdAndUpdate(req.params.id, { $set: newMenu }, { new: true })
        res.json({ menu });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal server error');
    }
});

router.delete('/deletemenu/:id', async (req, res) => {
    try {
        const { id } = req.params; // Get the id parameter from the URL

        // Find the menu to delete using the id
        const menuToDelete = await MenuData.findById(id);

        if (!menuToDelete) {
            return res.status(404).json({ message: 'Menu not found' });
        }

        // Delete the menu
        await menuToDelete.remove();

        res.json({ "Success": "Menu has been deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal server error');
    }
});

module.exports = router
