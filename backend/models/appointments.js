const mongoose = require('mongoose');

const appointmentsSchema = mongoose.Schema({
    overview: { type: String, required: true },
    details: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    doctor: { type: String, required: true }
})

module.exports = {
    model: mongoose.model('appointments', appointmentsSchema),
    schema: appointmentsSchema
}