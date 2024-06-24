const express = require('express');
const router = express.Router();

// ---------------------------------- INDEX SECTION --------------------------------------
// INDEX / HOMEPAGE
router.get('/', (req, res) => {
    try {
        res.render('index.ejs')
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;