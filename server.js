const express = require('express');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');
const port = process.env.PORT || 3000
const eldController = require('./controllers/elden');
const wepController = require('./controllers/wepcontrol');
const armController = require('./controllers/armcontrol');
const ringController = require('./controllers/ringcontrol');
const cantController = require('./controllers/cantcontrol');
const sorcController = require('./controllers/sorccontrol');

const mongoURI = 'mongodb+srv://SEBPT319:Stupid@cluster0.ahxum32.mongodb.net/'

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