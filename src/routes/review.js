const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Review route');
});

router.get('/reviews', (req, res) => {
    res.send('Reviews route');
});

router.get('/reviews/:userId', (req, res) => {
    res.send('Review route');
});

router.post('/reviews', (req, res) => {
    res.send('Review route');
});

router.delete('/reviews/:id', (req, res) => {
    res.send('Review route');
});


module.exports = router;