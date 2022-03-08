// -------------------------
// module dependencies
const ds = require('./datastore');
const db = ds.getInstance();

// -------------------------
// module functions
const SongDAO = {
    get(key) {
        return db.get(key);
    },
    save(key, value) {
        db.set(key, value);
        return value;
    },
    remove(key) {
        return db.delete(key);
    },
    nextId() {
        return ds.nextId();
    }
}

// -------------------------
// module exports
module.exports = SongDAO;