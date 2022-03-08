let instance = undefined;

// -------------------------
// module functions
const Datastore = {
    getInstance: function () {
        if (!instance) {
            instance = new Map();
        }
        return instance;
    },

    nextId() {
        if (!instance) {
            throw new Error('Datastore not initialized');
        }

        let next = 0;
        let keys = Array.from(instance.keys());
        if (keys && keys.length >0) {
            next = Number(Math.max.apply(null, keys));
        }

        return next +1;
    }
}

// -------------------------
// module exports
module.exports = Datastore;
