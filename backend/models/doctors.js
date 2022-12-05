const mongoose = require('mongoose');

const doctorssSchema = mongoose.Schema({
    name: { type: String, required: true },
    availHours: { type: Array, required: true }
})

module.exports = mongoose.model('doctors', doctorssSchema)
