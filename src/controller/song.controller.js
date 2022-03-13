// -------------------------
// module dependencies
const service = require('../service/song.service');

// -------------------------
// module functions
const findAll = async (req, res) => {
    const songs = await service.findAll();
    res.json(songs);
}

const findById = async (req, res) => {
    const song = await service.findById(req.params.id);
    (song ?
        res.json(song) :
        res.status(404).send('Song not found.'));
}

const insert = async (req, res) => {
    let result = undefined;
    let status = 200;
    let message = 'OK.';

    if (req.body && !req.body.id) {
        try {
            result = await service.save(null, req.body);
        }
        catch (e) {
            console.log(e);
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
}

const update = async (req, res) => {
    let result = undefined;
    let status = 200;
    let message = 'OK.';

    if (req.body &&
        (Number(req.body.id) === Number(req.params.id))) {

        try {
            result = await service.save(req.body.id, req.body);
        }
        catch (e) {
            console.log(e);
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
}

const remove = async (req, res) => {
    const result = await service.removeById(req.params.id);

    (result ?
        res.status(200).send('OK.') :
        res.status(404).send('Song not found.'));
}

// -------------------------
// module exports
module.exports = { findAll, findById, update, insert, remove };