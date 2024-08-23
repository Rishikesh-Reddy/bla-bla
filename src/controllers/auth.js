const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const login = (req, res) => {
    res.send('Login route');
};

const register = (req, res) => {
    res.send('Register route');
};

const logout = (req, res) => {
    res.send('Logout route');
};