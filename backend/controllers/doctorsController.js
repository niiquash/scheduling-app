const Doctors = require('../models/doctors');
const asyncHandler = require('express-async-handler');

// @desc Get all appointments
// @route GET /doctors
// @access Private
const getDoctors = asyncHandler(async (req, res) => {
    const docs = await Doctors.find().lean();
    if (!docs) {
        return res.status(400).json({ message: 'No Doctors found' });
    }
    res.json(docs);
})

// @desc Create one doctor
// @route POST /doctors
// @access Private
const createDoctor = asyncHandler(async (req, res) => {
    try {
        const doctor = new Doctors({
            name: req.body.name,
            availHours: req.body.availHours
        });
        const savedDoctor = await doctor.save();
        return res.status(201).json(savedDoctor._id);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// @desc Update one doctor
// @route PATCH /doctor/:id
// @access Private
const updateDoctor = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;
        const doctor = await Doctors.findByIdAndUpdate(
            id, req.body, { useFindAndModify: false }
        );
        if (!doctor) {
            return res.status(404).send({ message: `Cannot update doctor with id=${id}` });
        } else {
            res.status(204).send({ message: 'Doctor successfully updated.' })
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// @desc Delete one doctor
// @route DELETE /doctor/:id
// @access Private
const deleteDoctor = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;
        const removedDoctor = await Doctors.findByIdAndRemove(id);
        if (!removedDoctor) {
            res.status(404).send({ message: `Cannot delete doctor with id=${id}` })
        } else {
            res.status(200).send({ message: 'Doctor deleted successfully.' })
        }
    } catch (err) {
        res.status(500).send({ message: e.message });
    }
})

module.exports = {
    getDoctors,
    createDoctor,
    updateDoctor,
    deleteDoctor
}