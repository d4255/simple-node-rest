// -------------------------
// module dependencies
const dao = require('../data/song.dao');

// -------------------------
// module functions
const SongService = {
    getById(id) {
        return dao.get(id);
    },
    save(song) {
        return dao.save(song);
    },
    removeById(id) {
        return dao.remove(id);
    }
}

// -------------------------
// module exports
module.exports = SongService;
