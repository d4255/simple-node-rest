// -------------------------
// module variables
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
};

// -------------------------
// module exports
module.exports = Datastore.getInstance();
