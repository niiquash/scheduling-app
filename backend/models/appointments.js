const mongoose = require('mongoose');

const appointmentsSchema = mongoose.Schema({
    apptTitle: { type: String, required: true },
    apptDetails: { type: String, required: true },
    apptDate: { type: String, required: true },
    apptTime: { type: String, required: true },
})

module.exports = {
    model: mongoose.model('appointments', appointmentsSchema),
    schema: appointmentsSchema
}