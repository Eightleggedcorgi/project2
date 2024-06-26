const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');
const port = process.env.PORT || 3000
app.set('view engine', 'ejs');
const eldController = require('./controllers/elden');
const wepController = require('./controllers/wepcontrol');
const armController = require('./controllers/armcontrol');
const ringController = require('./controllers/ringcontrol');
const cantController = require('./controllers/cantcontrol');
const sorcController = require('./controllers/sorccontrol');
require("dotenv").config(); //for deploying

const mongoURI = process.env.MONGOURI;

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use('/elden', eldController);
app.use('/weapons', wepController);
app.use('/armor', armController);
app.use('/rings', ringController);
app.use('/incantations', cantController);
app.use('/sorceries', sorcController);
app.use( express.static(__dirname+'/assets/css'));

// CONNECTOR
async function connectToMongo() {
    try {
        await mongoose.connect(mongoURI);
        console.log('connected to mongodb');
    } catch (err) {
        console.error('error trying to connect', err);
    }
}

connectToMongo();

// LISTENER
app.listen(port, () => {
    console.log(`egden ging on port: ${port}`)
})