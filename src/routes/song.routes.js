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
router.post('/song', (req, res) => {
    let status = 200;
    let message = 'OK';
    let result = undefined;

    if (req.body && !req.body.id) {
        try {
            result = service.save(null, input);
        }
        catch (e) {
            status = 400;
            message = e.message;
        }
    }
    else {
        status = 400;
        message = 'Bad request.';
    }
        
    (result ?
        res.json(result) :
        res.status(status).send(message));
});

// PUT
router.put('/song/:id', (req, res) => {
    let status = 200;
    let message = 'OK';
    let result = undefined;

    if (req.body && 
        (Number(req.body.id) === Number(req.params.id))) {
        
        try {
            result = service.save(req.body.id, req.body);
        }
        catch (e) {
            status = 400;
            message = e.message;
        }
    }
    else {
        status = 400;
        message = 'Bad request.';
    }
        
    (result ?
        res.json(result) :
        res.status(status).send(message));
});

// DELETE
router.delete('/song/:id', (req, res) => {
    let result = service.removeById(req.params.id);
    (result ? 
        res.status(200).send('Song ' + req.params.id + ' removed.') :
        res.status(404).send('Song not found.'));
});

// -------------------------
// module exports
module.exports = router;