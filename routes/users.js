const express = require('express');
const router = express.Router();

//Login PAge
router.get('/login', (req, res) => res.render('login'));

//Register PAge
router.get('/register', (req, res) => res.render('register'));





module.exports = router;