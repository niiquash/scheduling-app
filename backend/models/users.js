const mongoose = require('mongoose');
const appointments = require('./appointments.js')

const usersSchema = new mongoose.Schema({
    userEmail: {
        identifier: { type: String, unique: true, required: true },
        email: { type: String, unique: true, required: true },
        givenName: { type: String, required: true },
        familyName: { type: String, required: true },
        locale: { type: String, required: true },
        picture: { type: String },
        appointments: [appointments.schema]
    }
})

module.exports = mongoose.model('users', usersSchema);