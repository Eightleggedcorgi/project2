const mongoose = require('mongoose')
const Schema = mongoose.Schema

const armSchema = new Schema({
    name: {type: String, required: true,},
    found: String,
    reqs: String,
    scaling: String
});

const Eldenarm = mongoose.model('eldArm', armSchema);

module.exports = Eldenarm;