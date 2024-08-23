const { User, Ride, Booking } = require('../models');

const findById = async (req, res) => {
    res.send('Booking route');
}

const findAll = async (req, res) => {
    res.send('Bookings route');
}

const findByUserId = async (req, res) => {
    res.send('Booking route');
}

const findByRideId = async (req, res) => {
    res.send('Booking route');
}

const create = async (req, res) => {
    res.send('Booking route');
}

const update = async (req, res) => {
    res.send('Booking route');
}

const remove = async (req, res) => {
    res.send('Booking route');
}

module.exports = {
    findById,
    findAll,
    findByUserId,
    findByRideId,
    create,
    update,
    remove
}