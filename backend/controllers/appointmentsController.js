const Appointments = require('../models/appointments');
const asyncHandler = require('express-async-handler');

// @desc Get all appointments
// @route GET /appointments
// @access Private
const getAppointments = asyncHandler(async (req, res) => {
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
    try {
        const appointment = new Appointments.model({
            overview: req.body.overview,
            details: req.body.details,
            date: req.body.date,
            time: req.body.time,
            doctor: req.body.doctor
        });
        const savedAppointment = await appointment.save();
        return res.status(201).json(savedAppointment._id);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// @desc Update one appointment
// @route PATCH /appointment/:id
// @access Private
const updateAppointment = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;
        const appointment = await Appointments.model.findByIdAndUpdate(
            id, req.body, { useFindAndModify: false }
        );
        if (!appointment) {
            return res.status(404).send({ message: `Cannot update appointment with id=${id}` });
        } else {
            res.status(204).send({ message: 'Appointment successfully updated.' })
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// @desc Delete one appointment
// @route DELETE /appointment/:id
// @access Private
const deleteAppointment = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;
        const removedAppointment = await Appointments.model.findByIdAndRemove(id);
        if (!removedAppointment) {
            res.status(404).send({ message: `Cannot delete appointment with id=${id}` })
        } else {
            res.status(200).send({ message: 'Appointment deleted successfully.' })
        }
    } catch (err) {
        res.status(500).send({ message: e.message });
    }
})

module.exports = {
    getAppointments,
    createAppointment,
    updateAppointment,
    deleteAppointment
}