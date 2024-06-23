const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ringSchema = new Schema({
    name: {type: String, required: true,},
    found: String,
    effect: String
})

const Eldenring = mongoose.model('Eldenring', ringSchema)

module.exports = Eldenring;