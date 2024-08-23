const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Auth route');
});

router.get('/login', (req, res) => {
    res.send('Login route');
});

router.post('/register', (req, res) => {
    res.send('Register route');
});

router.post('/logout', (req, res) => {
    res.send('Logout route');
});

module.exports = router;