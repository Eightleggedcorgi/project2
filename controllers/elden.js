const express = require('express');
const router = express.Router();

const Eldenarm = require('../models/arm');
const Eldenweps = require('../models/weps');
const Eldenring = require('../models/ring');
const Eldencant = require('../models/cant');
const Eldensorc = require('../models/sorc');

// ARMOR SEED TESTING
router.get("/seed/armor", async (req, res) => {
    try {
      await Eldenarm.create([
        {
          name: "Samurai / Land of Reeds Set",
          found: "In the Isolated Merchant's Shack, Northern Dragonbarrow, or by starting as a samurai"
        },
        {
          name: "Veteran's Set",
          found: "Purchase from Enia after beating Commander Niall in Castle Sol, Consecrated Snowfield"
        },
        {
          name: "Mushroom Set",
          found: "In some stupid-ass stinky cave in Caelid (Seethewater specifically)"
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

// RING SEED TESTING
router.get("/seed/rings", async (req, res) => {
    try {
      await Eldenring.create([
        {
          name: "Sacrificial Twig",
          found: "All over the place",
          effect: "Prevents rune loss on death, but is consumed"
        },
        {
            name: "Blue Dancer Charm",
            found: "Defeat the Guardian Golem in Highroad Cave, Limgrave",
            effect: "Physical damage output increased with lower equipment load"
        },
        {
            name: "Greatshield Talisman",
            found: "In an armored carriage chest in Altus Plateau",
            effect: "Reduces stamina loss from blocking by 20%"
        },
      ]);
      res.redirect("/elden/rings");
    } catch (err) {
      console.error(err);
      res.status(500).send("Seed Error");
    }
  });

// INCANT SEED TESTING
router.get("/seed/incantations", async (req, res) => {
    try {
      await Eldencant.create([
        {
          name: "Ancient Dragon Lightning Spear",
          found: "Buy from vendor after giving Ancient Dragon Prayerbook from Farum Azula",
          details: "Summon a red lightning bolt that strikes in front of you and emits an AoE",
          reqs: "32 FAI",
          dmgtypes: "Lightning",
          fpcost: 25,
          slotcost: 1,
          cancharge: false
        },
        {
            name: "Radagon's Rings of Light",
            found: "Buy from vendor after giving Golden Order Principia from Leyndell",
            details: "Unleash a damaging golden wave",
            reqs: "31 FAI, 31 INT",
            dmgtypes: "Holy",
            fpcost: 21,
            slotcost: 1,
            cancharge: true
        },
        {
            name: "Flame Sling",
            found: "Buy from Brother Corhyn in Roundtable, available immediately",
            details: "Throw a fireball. Thats it. Expecting a Bugatti?",
            reqs: "10 FAI",
            dmgtypes: "Fire",
            fpcost: 11,
            slotcost: 1,
            cancharge: true
        },
      ]);
      res.redirect("/elden/incantations");
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
router.get('/rings', async (req, res) => {
    try {
        const allRings = await Eldenring.find({});
        res.render('ringdex.ejs', { ring: allRings });
    } catch (err) {
        console.error(err);
    }
});

// INCANT INDEX
router.get('/incantations', async (req, res) => {
    try {
        const allCants = await Eldencant.find({});
        res.render('cantdex.ejs', { cant: allCants });
    } catch (err) {
        console.error(err);
    }
});

// SORCERY INDEX
router.get('/sorceries', async (req, res) => {
    try {
        const allSorc = await Eldensorc.find({});
        res.render('sorcdex.ejs', { sorc: allSorc });
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


// WEAPON UPDATE
router.put("/:id", async (req, res) => {
    try {
        const updatedWep = await Eldenweps.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect("/elden/weapons");
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