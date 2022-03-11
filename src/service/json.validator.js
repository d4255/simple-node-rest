// -------------------------
// module functions
const validateSongJSON = (input) => {
    let output = undefined;

    if (input) {
        const { id, title, artist, url } = input;
        
        if (!id) {
            throw new Error('ID is required.');
        }
        if (!title) {
            throw new Error('Title is required.');
        }
        if (!artist) {
            throw new Error('Artist is required.');
        }

        output = { id, title, artist, url };
    }

    return output;
}

// -------------------------
// module exports
module.exports.validateSongJSON = validateSongJSON;