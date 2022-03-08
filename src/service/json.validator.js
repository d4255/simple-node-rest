
const JSONValidator = {
    validateSongJSON(jsonIn) {
        let result = undefined;

        if (jsonIn) {
            let cleanJSON = JSON.parse(JSON.stringify(jsonIn));
            if (!cleanJSON.id) {
                throw new Error('ID is required.');
            }
            if (!cleanJSON.title) {
                throw new Error('Title is required.');
            }
            if (!cleanJSON.artist) {
                throw new Error('Artist is required.');
            }

            let songJSON = {
                "id": cleanJSON.id,
                "title": cleanJSON.title,
                "artist": cleanJSON.artist,
                "url": cleanJSON.url
            }
            jsonOut = JSON.parse(JSON.stringify(songJSON));
        }

        return jsonOut;
    }
}

module.exports = JSONValidator;