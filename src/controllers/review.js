const { User, Review } = require('../models');

const findById = async (req, res) => {
    res.send('Review route');
}

const findAll = async (req, res) => {
    res.send('Reviews route');
}

const findByUserId = async (req, res) => {
    res.send('Review route');
}

const findByReviewerId = async (req, res) => {
    res.send('Review route');
}

const create = async (req, res) => {
    res.send('Review route');
}

const remove = async (req, res) => {
    res.send('Review route');
}

module.exports = {
    findById,
    findAll,
    findByUserId,
    findByReviewerId,
    create,
    remove
}
