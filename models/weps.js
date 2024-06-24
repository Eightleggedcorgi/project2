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
    extra: String,
    somber: Boolean
})

const Eldenweps = mongoose.model('Eldenweps', wepsSchema)

module.exports = Eldenweps;