// -------------------------
// module exports
const JSONValidator = {
    validateSongJSON(jsonIn) {
        let jsonOut = undefined;

        if (jsonIn) {
            const { id, title, artist, url } = jsonIn;
            
            if (!id) {
                throw new Error('ID is required.');
            }
            if (!title) {
                throw new Error('Title is required.');
            }
            if (!artist) {
                throw new Error('Artist is required.');
            }

            jsonOut = { id, title, artist, url };
        }

        return jsonOut;
    }
}

// -------------------------
// module exports
module.exports = JSONValidator;