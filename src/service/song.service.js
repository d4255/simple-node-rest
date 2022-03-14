
// -------------------------
// module dependencies
const dao = require('../data/song.dao');
const validator = require('./json.validator');

// -------------------------
// module functions
const findById = (id) => {
    return dao.get(String(id));
}

const findAll = () => {
    return dao.getAll();
}

const save = (id, song) => {
    let result = undefined;

    if (!id) {
        song.id = dao.nextId();
    }
    else if (id != song.id) {
        throw new Error('Bad request.');
    }

    try {
        song = validator.validateSongJSON(song);
    }
    catch (e) {
        console.log(e);
        throw new Error(e);
    }

    result = dao.save(String(song.id), song);

    return result;
}

const removeById = (id) => {
    return dao.remove(String(id));
}

// -------------------------
// module exports
module.exports = { findById, findAll, save, removeById };
