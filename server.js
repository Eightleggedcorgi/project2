const express = require('express');
const app = express();
const methodOverride = require('method-override');
const port = process.env.PORT || 3000
const eldController = require('./controllers/elden');

// MIDDLEWARE
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use('/elden', eldController);

// LISTENER
app.listen(port, () => {
    console.log(`egden ging on port: ${port}`)
})