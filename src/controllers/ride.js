const { User, Ride} = require('../models');

const findById = async (req, res) => {
    res.send('Ride route');
}

const findAll = async (req, res) => {
    res.send('Rides route');
}

const findByDeparture = async (req, res) => {
    res.send('Ride route');
}

const findByArrival = async (req, res) => {
    res.send('Ride route');
}

const findByDepartureAndArrival = async (req, res) => {
    res.send('Ride route');
}

const findByTimeDepartureAndArrival = async (req, res) => {
    res.send('Ride route');
}

const findByTimeDepartureArrivalAndSeats = async (req, res) => {
    res.send('Ride route');
}

const create = async (req, res) => {
    res.send('Ride route');
}

const update = async (req, res) => {
    res.send('Ride route');
}

const remove = async (req, res) => {
    res.send('Ride route');
}

module.exports = {
    findById,
    findAll,
    findByDeparture,
    findByArrival,
    findByDepartureAndArrival,
    findByTimeDepartureAndArrival,
    findByTimeDepartureArrivalAndSeats,
    create,
    update,
    remove
}