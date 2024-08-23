const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Booking route');
});

router.get('/bookings', (req, res) => {
    res.send('Bookings route');
});

router.get('/bookings/:id', (req, res) => {
    res.send('Booking route');
});

router.get('/bookings/:userId', (req, res) => {
    res.send('Booking route');
});

router.post('/bookings', (req, res) => {
    res.send('Booking route');
});

router.put('/bookings/:id', (req, res) => {
    res.send('Booking route');
});

router.delete('/bookings/:id', (req, res) => {
    res.send('Booking route');
});

module.exports = router;