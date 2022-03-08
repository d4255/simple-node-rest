// -------------------------
// module dependencies
const router = require('express').Router();
const service = require('../service/song.service');

// -------------------------
// module functions

// define API endpoints

// GET
router.get('/song/:id', (req, res) => {
    let result = service.getById(req.params.id);
    (result ? 
        res.json(result) : 
        res.status(404).send('Song not found.'));
});

// POST
router.post('/song', async (req, res) => {
    console.log('Received a POST request.');
});

// PUT
router.put('/song/:id', async (req, res) => {
    console.log('Received a PUT request for song id ' + req.params.id);
});

// DELETE
router.delete('/song/:id', async (req, res) => {
    let result = service.removeById(req.params.id);
    (result ? 
        res.status(200).send('Song ' + req.params.id + ' removed.') :
        res.status(404).send('Song not found.'));
});

// -------------------------
// module exports
module.exports = router;