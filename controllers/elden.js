const express = require('express');
const router = express.Router();

const Eldenarm = require('../models/arm')

// ARMOR SEED TESTING
router.get("/seed", async (req, res) => {
    try {
      await Eldenarm.create([
        {
          name: "Samurai Set",
          found: "found in limgrave, or starting as a samurai"
        },
        {
          name: "Veteran's Set",
          found: "found in purchase from Enia after beating Commander Niall in Castle Sol"
        },
        {
          name: "Mushroom Set",
          found: "found in some stupid-ass cave in caelid"
        },
      ]);
      res.redirect("/elden/armor");
    } catch (err) {
      console.error(err);
      res.status(500).send("Seed Error");
    }
  });

// ---------------------------------- INDEX SECTION --------------------------------------
// INDEX / HOMEPAGE
router.get('/', (req, res) => {
    try {
        res.render('index.ejs')
    } catch (err) {
        console.error(err);
    }
});

// ARMOR INDEX
router.get('/armor', async (req, res) => {
    try {
        const allArmor = await Eldenarm.find({});
        res.render('armordex.ejs', { arm: allArmor });
    } catch (err) {
        console.error(err);
    }
});

// WEAPON INDEX
router.get('/weapons', (req, res) => {
    try {
        res.render('weapondex.ejs')
    } catch (err) {
        console.error(err);
    }
});

// RING INDEX
router.get('/rings', (req, res) => {
    try {
        res.render('ringdex.ejs')
    } catch (err) {
        console.error(err);
    }
});

// INCANT INDEX
router.get('/incantations', (req, res) => {
    try {
        res.render('cantdex.ejs')
    } catch (err) {
        console.error(err);
    }
});

// SORCERY INDEX
router.get('/sorceries', (req, res) => {
    try {
        res.render('sorcdex.ejs')
    } catch (err) {
        console.error(err);
    }
});

// ---------------------------------- OTHER STUFF --------------------------------------
// NEW
router.get('/new', (req, res) => {
    res.render('new.ejs')
});

module.exports = router;