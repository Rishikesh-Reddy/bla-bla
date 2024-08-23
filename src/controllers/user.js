const { User } = require('../models');

const findById = async (req, res) => {
    res.send('User route');
}

const findAll = async (req, res) => {
    res.send('Users route');
}

const findByEmail = async (req, res) => {
    res.send('User route');
}

const create = async (req, res) => {
    res.send('User route');
}

const update = async (req, res) => {
    res.send('User route');
}

const remove = async (req, res) => {
    res.send('User route');
}


module.exports ={
    findById,
    findAll,
    findByEmail,
    create,
    update,
    remove
}