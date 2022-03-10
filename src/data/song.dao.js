// -------------------------
// module dependencies
const db = require('./datastore');

// -------------------------
// module functions
const SongDAO = {
    get(key) {
        return db.get(key);
    },
    getAll() {
        return Array.from(db.values());
    },
    save(key, value) {
        db.set(key, value);
        return value;
    },
    remove(key) {
        return db.delete(key);
    },
    nextId() {
        const keys = Array.from(db.keys());
        return (keys.length > 0 ?
                    Number(Math.max.apply(null, keys)) :
                    0) + 1;
    }
}

// -------------------------
// module exports
module.exports = SongDAO;