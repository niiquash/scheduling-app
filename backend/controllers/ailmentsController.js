const Ailments = require('../models/ailments');
const asyncHandler = require('express-async-handler');

// @desc Get all appointments
// @route GET /appointments
// @access Private
const getAilments = asyncHandler(async (req, res) => {
    const ailment = await Ailments.find().lean();
    if (!ailment) {
        return res.status(400).json({ message: 'No appointments found' });
    }
    res.json(ailment);
})

// @desc Create one appointment
// @route POST /appointments
// @access Private
const createAilment = asyncHandler(async (req, res) => {
    try {
        const ailment = new Ailments({
            name: req.body.name
        });
        const savedAilment = await ailment.save();
        return res.status(201).json(savedAilment._id);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// @desc Update one appointment
// @route PATCH /appointment/:id
// @access Private
const updateAilment = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;
        const ailment = await Ailments.findByIdAndUpdate(
            id, req.body, { useFindAndModify: false }
        );
        if (!ailment) {
            return res.status(404).send({ message: `Cannot update ailment with id=${id}` });
        } else {
            res.status(204).send({ message: 'Ailment successfully updated.' })
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// @desc Delete one appointment
// @route DELETE /appointment/:id
// @access Private
const deleteAilment = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;
        const removedAilment = await Ailments.findByIdAndRemove(id);
        if (!removedAilment) {
            res.status(404).send({ message: `Cannot delete ailment with id=${id}` })
        } else {
            res.status(200).send({ message: 'Ailment deleted successfully.' })
        }
    } catch (err) {
        res.status(500).send({ message: e.message });
    }
})

module.exports = {
    getAilments,
    createAilment,
    updateAilment,
    deleteAilment
}