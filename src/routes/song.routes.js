// -------------------------
// module dependencies
const SongController = require('../controller/song.controller'); 

// -------------------------
// module functions

// define API endpoints

const loadSongRoutes = (app, controller = SongController) => {
    // GET: find all songs
    app.get('/songs', controller.findAllSongs);
    // GET: find song by ID
    app.get('/songs/:id', controller.findById);
    // POST
    app.post('/songs', controller.insert);
    // PUT
    app.put('/songs/:id', controller.update);
    // DELETE
    app.delete('/songs/:id', controller.remove);
}

// -------------------------
// module exports
module.exports = loadSongRoutes;