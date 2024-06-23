const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cantSchema = new Schema({
    name: {type: String, required: true,},
    found: String,
    details: String,
    reqs: String,
    dmgtypes: String,
    fpcost: Number,
    slotcost: Number,
    cancharge: Boolean

})

const Eldencant = mongoose.model('Eldencant', cantSchema)

module.exports = Eldencant;