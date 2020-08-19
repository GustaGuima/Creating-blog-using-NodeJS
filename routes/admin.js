const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Home Page');
});

router.get('/posts', (req, res) => {
    res.send('Posts Page');
});

router.get('/categorias', (req, res) => {
    res.send('Categories Page');
})

module.exports = router;