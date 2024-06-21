const express = require('express');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');
const port = process.env.PORT || 3000
const eldController = require('./controllers/elden');

const mongoURI = 'mongodb+srv://SEBPT319:Stupid@cluster0.ahxum32.mongodb.net/'

// MIDDLEWARE
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use('/elden', eldController);

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