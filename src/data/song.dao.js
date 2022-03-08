// -------------------------
// module dependencies
const ds = require('./inMemoryDB');
const db = ds.getInstance();

// -------------------------
// module functions
const SongDAO = {
    get(id) {
        return db.get(id);
    },
    save(json) {
        return db.set(song.id, song);
    },
    remove(id) {
        return db.delete(id);
    }
}

// -------------------------
// module exports
module.exports = SongDAO;