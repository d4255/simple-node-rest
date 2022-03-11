// -------------------------
// module dependencies
const db = require('./datastore');

// -------------------------
// module functions
const get = (key) => {
    return db.get(key);
}

const getAll = () => {
    return Array.from(db.values());
}

const save = (key, value) => {
    db.set(key, value);
    return value;
}

const remove = (key) => {
    return db.delete(key);
}

const nextId = () => {
    const keys = Array.from(db.keys());
    return (keys.length > 0 ?
                Number(Math.max.apply(null, keys)) :
                0) + 1;
}

// -------------------------
// module exports
module.exports.get = get;
module.exports.getAll = getAll;
module.exports.save = save;
module.exports.remove = remove;
module.exports.nextId = nextId;
