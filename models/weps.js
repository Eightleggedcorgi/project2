const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wepsSchema = new Schema({
    name: {type: String, required: true,},
    found: String,
    type: String,
    reqs: String,
    scaling: String,
    endScaling: String,
    dmgtypes: String,
    somber: Boolean,
    extra: String,
})

const Eldenweps = mongoose.model('Eldenweps', wepsSchema)

module.exports = Eldenweps;