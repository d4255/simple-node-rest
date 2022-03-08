// -------------------------
// module functions
const inMemoryDatabase = function () {
    let instance = undefined;

    return {
        getInstance: function () {
            if (!instance) {
                instance = new Map();
            }

            return instance;
        }
    };
}

// -------------------------
// module exports
module.exports = inMemoryDatabase();
