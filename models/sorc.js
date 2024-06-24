const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sorcSchema = new Schema({
    name: {type: String, required: true,},
    found: String,
    details: String,
    reqs: String,
    dmgtypes: String,
    fpcost: Number,
    slotcost: Number,
    cancharge: Boolean

})

const Eldensorc = mongoose.model('Eldensorc', sorcSchema)

module.exports = Eldensorc;