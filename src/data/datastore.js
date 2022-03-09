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

        const keys = Array.from(instance.keys());
        return (keys.length > 0 ?
                    Number(Math.max.apply(null, keys)) :
                    0) + 1;
    }
}

// -------------------------
// module exports
module.exports = Datastore;
