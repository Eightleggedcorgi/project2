const mongoose = require('mongoose')
const Schema = mongoose.Schema

const armSchema = new Schema({
    name: {type: String, required: true,},
    found: String
})

const Eldenarm = mongoose.model('Eldenarm', armSchema)

module.exports = Eldenarm;