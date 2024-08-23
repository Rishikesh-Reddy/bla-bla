const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('User route');
});

router.get('/users', (req, res) => {
    res.send('Users route');
});

router.get('/users/:id', (req, res) => {
    res.send('User route');
});

router.put('/users/:id', (req, res) => {
    res.send('User route');
});

router.delete('/users/:id', (req, res) => {
    res.send('User route');
});

module.exports = router;