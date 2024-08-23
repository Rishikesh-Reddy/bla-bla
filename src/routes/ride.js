const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Ride route');
});

router.get('/rides', (req, res) => {
    res.send('Rides route');
});

router.get('/rides/:id', (req, res) => {
    res.send('Ride route');
});

router.get('/rides/:userId', (req, res) => {
    res.send('Ride route');
});

router.post('/rides', (req, res) => {
    res.send('Ride route');
});

router.put('/rides/:id', (req, res) => {
    res.send('Ride route');
});

router.delete('/rides/:id', (req, res) => {
    res.send('Ride route');
});

module.exports = router;