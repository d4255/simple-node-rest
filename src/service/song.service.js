// -------------------------
// module dependencies
const dao = require('../data/song.dao');
const validator = require('./json.validator');

// -------------------------
// module functions
const SongService = {
    getById(id) {
        return dao.get(id);
    },
    save(id, song) {
        let result = undefined;

        if (!id) {
            song.id = dao.nextId();
        }
        else if (id != song.id) {
            throw new Error ('Bad request.');
        }

        try {
            let validSong = validator.validateSongJSON(song);
            result = dao.save(validSong.id, validSong);
        }
        catch (e) {
            throw new Error(e);
        }

        return result;
    },
    removeById(id) {
        return dao.remove(id);
    }
}

// -------------------------
// module exports
module.exports = SongService;
