// routes are URLs that clients can access to perform certain actions 
// defining the CRUD routes below 

const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Create a new user 
router.post('/', (req, res) => {
    const { name, email, age } = req.body;
    const newUser = new User({ name, email, age });

    newUser.save()
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.status(500).json({ error: 'Error creating user' });
        });
});

router.get('/', (req, res) => {
    User.find()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.status(500).json({ error: 'Error fetching users' });
        });
});