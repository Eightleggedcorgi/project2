const express = require('express');
const router = express.Router();

const Eldenarm = require('../models/arm')

// INDEX
router.get('/', async (req, res) => {
    try {
        res.render('index.ejs')
    } catch (err) {
        console.error(err);
    }
});

// NEW
router.get('/new', (req, res) => {
    res.render('new.ejs')
});

module.exports = router;