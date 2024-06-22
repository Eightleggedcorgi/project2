const express = require('express');
const router = express.Router();

const Eldenarm = require('../models/arm');
const Eldenweps = require('../models/weps');

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
          found: "purchase from Enia after beating Commander Niall in Castle Sol, Consecrated Snowfield"
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

// WEAPON SEED TESTING
router.get("/seed/weps", async (req, res) => {
    try {
      await Eldenweps.create([
        {
          name: "Blasphemous Blade",
          found: "transpose Rykard's soul",
          type: "Greatsword",
          reqs: "22 STR, 15 DEX, 21 FAI",
          scaling: "D, D, D",
          endScaling: "C, C, B",
          dmgtypes: "Phys, Fire",
          somber: true,
          extra: "Restore HP on kill or special attack hit"
        },
        {
          name: "Ripple Blade",
          found: "purchase from Pidia in Caria Manor",
          type: "Axe",
          reqs: "11 STR, 11 DEX, 20 ARC",
          scaling: "NONE, NONE, A",
          endScaling: "NONE, NONE, S",
          dmgtypes: "Phys",
          somber: false,
          extra: "Partially unique moveset"
        },
        {
          name: "Moonveil",
          found: "defeat the Magma Wyrm in Gael Tunnel, Caelid",
          type: "Katana",
          reqs: "12 STR, 18 DEX, 23 INT",
          scaling: "E, D, C",
          endScaling: "E, B, B",
          dmgtypes: "Phys, Magic",
          somber: true,
          extra: "Causes bleed, use in PVP to prove you're a little bitch"
        },
      ]);
      res.redirect("/elden/weapons");
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
router.get('/weapons', async (req, res) => {
    try {
        const allWeapons = await Eldenweps.find({});
        res.render('weapondex.ejs', { weps: allWeapons });
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

// ---------------------------------- NEW SECTION --------------------------------------
// NEW
router.get('/new', (req, res) => {
    res.render('new.ejs')
});

// ---------------------------------- DELETE SECTION --------------------------------------
// WEAPON DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Eldenweps.findByIdAndDelete(req.params.id)
        res.redirect('/elden/weapons')
    } catch (err) {
        console.error(err)
    }
});

// ARMOR DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Eldenarm.findByIdAndDelete(req.params.id)
        res.redirect('/elden/armor')
    } catch (err) {
        console.error(err)
    }
});

// ARMOR UPDATE
router.put("/:id", async (req, res) => {
    try {
        const updatedArm = await Eldenarm.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect("/elden/armor");
    } catch (err) {
        console.error(err)
    }
});

// ARMOR CREATE
router.post('/', async (req, res) => {
    try {
        const createdArm = await Eldenarm.create(req.body);
        res.redirect("/elden/armor");
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// ARMOR EDIT
router.get("/:id/edit", async (req, res) => {
    try {
        const foundArm = await Fruit.findById(req.params.id);
        res.render("edit.ejs", {
            eldarm: foundArm
        });
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;