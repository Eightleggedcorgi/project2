const express = require('express');
const app = express();
const port = process.env.PORT || 3000

// MIDDLEWARE
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

// LISTENER
app.listen(port, () => {
    console.log(`egden ging on port: ${port}`)
})