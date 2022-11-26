const mongoose = require('mongoose');

const appointmentsSchema = mongoose.Schema({
    appointmentTitle: { type: String, required: true },
    appointmentDetails: { type: String, required: true },
    appointmentStart: { type: String, required, required },
    appointmentEnd: { type: String, required, required }
})

module.exports = {
    model: mongoose.model('appointments', appointmentsSchema),
    schema: appointmentsSchema
}