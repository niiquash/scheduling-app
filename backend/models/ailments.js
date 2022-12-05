const mongoose = require('mongoose');

const ailmentsSchema = mongoose.Schema({
    name: { type: String, required: true }
})

module.exports = mongoose.model('ailments', ailmentsSchema);