const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
const Restaurant = require('../models/Restaurant');

const JWT_SECRET = "ThisisReactCour$se";

const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        return next(); // Allow access for admin users
    }
    return res.status(403).send('Forbidden');
};

const isMerchant = (req, res, next) => {
    if (req.user && (req.user.role === 'merchant' || req.user.role === 'admin')) {
        return next(); // Allow access for merchant and admin users
    }
    return res.status(403).send('Forbidden');
};

// Create a user: POST
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
    body('role').isIn(['admin', 'merchant', 'user']),], async (req, res) => {
        let success = false;
        // if there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }

        try {
            // check whether the user with this email exists already
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ success, error: 'User with this email already exists' })
            }

            const salt = await bcrypt.genSaltSync(10);
            const secPass = await bcrypt.hash(req.body.password, salt);

            // Create a new user
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
                role: req.body.role,
            });

            const data = {
                user: {
                    id: user.id,
                    role: user.role // Include the user's role in the payload
                }
            }

            const authtoken = jwt.sign(data, JWT_SECRET);
            success = true;
            res.json({ success, authtoken })

            //res.status(200).json({ success: true, data: data });

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }
    });

//create-isAdmin
router.post('/create-admin', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
    body('role').isIn(['admin', 'merchant', 'user']),], async (req, res) => {
    let success = false;
    // if there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    if (req.body.role !== 'admin') {
        return res.status(400).json({ success: false, error: 'Invalid role for creating an admin user' });
    }

    try {
        // check whether the user with this email exists already
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success, error: 'User with this email already exists' })
        }

        const salt = await bcrypt.genSaltSync(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        // Create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
            role: req.body.role,
        });

        const data = {
            user: {
                id: user.id,
                role: user.role // Include the user's role in the payload
            }
        }

        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken })

        //res.status(200).json({ success: true, data: data });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

//create-isMerchant
router.post('/create-merchant', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
    body('role').isIn(['admin', 'merchant', 'user']),], async (req, res) => {
    let success = false;
    // if there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    if (req.body.role !== 'merchant') {
        return res.status(400).json({ success: false, error: 'Invalid role for creating a merchant user' });
    }

    try {
        // check whether the user with this email exists already
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success, error: 'User with this email already exists' })
        }

        const salt = await bcrypt.genSaltSync(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        // Create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
            role: req.body.role,
        });

        const data = {
            user: {
                id: user.id,
                role: user.role // Include the user's role in the payload
            }
        }

        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken })

        //res.status(200).json({ success: true, data: data });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

//User Login
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            success = false
            return res.status(400).json({ error: 'Please try to login with correct credentials' });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success = false
            return res.status(400).json({ success, error: 'Please try to login with correct credentials' });
        }

        const data = {
            user: {
                id: user.id,
                role: user.role // Include the user's role in the payload
            }
        }

        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken, role: user.role });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})
// ROUTE 3: Get logged in User details using: POST "/api/auth/getuser" . login requires
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

//Restaurant List
router.post('/restaurants', [
    body('name', 'Name is required').notEmpty(),
    body('location', 'Location is required').notEmpty(),
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Check if a restaurant with the same name already exists
        let restaurant = await Restaurant.findOne({ name: req.body.name });
        if (restaurant) {
            return res.status(400).json({ success, error: 'A restaurant with this name already exists' });
        }

        // Create a new restaurant
        restaurant = await Restaurant.create({
            name: req.body.name,
            location: req.body.location,
        });

        const data = {
            restaurant: {
                name: restaurant.name,
                location: restaurant.location,
            }
        }

        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal server error');
    }
})

router.get('/fetchrestaurantdata', async (req, res) => {
    try {
        // Fetch all restaurant data from the database
        const restaurants = await Restaurant.find();

        // Check if there are no restaurants
        if (restaurants.length === 0) {
            return res.status(404).json({ error: 'No restaurants found' });
        }

        // Return the restaurant data
        res.json(restaurants);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

// Admin-only route
router.post('/admin-page', isAdmin, (req, res) => {
    // This route is only accessible to admin users
    res.json({ message: 'Welcome to the admin page' });
});

// Merchant-only route
router.post('/merchant-page', isMerchant, (req, res) => {
    // This route is only accessible to merchant users
    res.json({ message: 'Welcome to the merchant page' });
});

module.exports = router;