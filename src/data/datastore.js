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

        let max = Number(Math.max.apply(null, Array.from(instance.keys())));

        return max +1;
    }
}

// -------------------------
// module exports
module.exports = Datastore;
