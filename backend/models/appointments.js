const mongoose = require('mongoose');

const appointmentsSchema = mongoose.Schema({
    apptTitle: { type: String, required: true },
    apptDetails: { type: String, required: true },
    apptStart: { type: String, required: true },
    apptEnd: { type: String, required: true }
})

module.exports = {
    model: mongoose.model('appointments', appointmentsSchema),
    schema: appointmentsSchema
}