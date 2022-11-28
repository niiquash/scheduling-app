const Appointments = require('../models/appointments');
const asyncHandler = require('express-async-handler');

// @desc Get all appointments
// @route GET /appointments
// @access Private
const getAppointments = asyncHandler(async (req, res) => {
    if (!req.user) {
        return res.status(401).send({ message: 'Not Authenticated' })
    }
    const appts = await Appointments.model.find().lean();
    if (!appts) {
        return res.status(400).json({ message: 'No appointments found' });
    }
    res.json(appts);
})

// @desc Create one appointment
// @route POST /appointments
// @access Private
const createAppointment = asyncHandler(async (req, res) => {
    if (!req.user) {
        return res.status(401).send({ message: 'Not Authenticated' })
    }
    const { apptTitle, apptDetails, apptStart, apptEnd } = req.body;

    // confirm data
    if (!apptTitle || !apptDetails || !apptStart || !apptEnd) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // check for duplicate
    const duplicate = await Appointments.model.findOne({ apptDetails }).lean().exec();

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate details content' });
    }

    const apptObject = { apptTitle, apptDetails, apptStart, apptEnd };

    // create and store new appointment
    const appt = await Appointments.model.create(apptObject);

    if (appt) { // if created
        res.status(201).json({ message: 'New appointment created' });
    } else {
        res.status(400).json({ message: 'There was a problem creating an appointment' });
    }
})

// @desc Update one appointment
// @route PATCH /appointment/:id
// @access Private
const updateAppointment = asyncHandler(async (req, res) => {
    if (!req.user) {
        return res.status(401).send({ message: 'Not Authenticated' })
    }
    const { id, apptTitle, apptDetails, apptStart, apptEnd } = req.body;

    // confirm data
    if (!id || !apptTitle || !apptDetails || !apptStart || !apptEnd) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // find appointment by id
    const appt = await Appointments.model.findById(id).exec();

    if (!appt) {
        return res.status(400).json({ message: 'Appointment not found' });
    }

    // check for duplicate
    const duplicate = await Appointments.model.findOne({ apptDetails }).lean().exec()
    // Allow updates to the original appointment
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate appointment' })
    }

    appt.apptTitle = apptTitle;
    appt.apptDetails = apptDetails;
    appt.apptStart = apptStart;
    appt.apptEnd = apptEnd;

    const updateAppointment = await appt.save();

    res.json({ message: 'Appointment updated' })
})

// @desc Delete one appointment
// @route DELETE /appointment/:id
// @access Private
const deleteAppointment = asyncHandler(async (req, res) => {
    if (!req.user) {
        return res.status(401).send({ message: 'Not Authenticated' })
    }
    const { id } = req.body

    if (!id) {
        return res.status(400).json({ message: 'Appointment ID Required' })
    }

    const appt = await Appointments.model.findById(id).exec()

    if (!appt) {
        return res.status(400).json({ message: 'Appointment not found' })
    }

    const result = await appt.deleteOne()

    const reply = `Appointment ${result.title} with ID ${result._id} deleted`

    res.json(reply)
})

module.exports = {
    getAppointments,
    createAppointment,
    updateAppointment,
    deleteAppointment
}