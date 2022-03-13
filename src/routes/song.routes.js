// -------------------------
// module dependencies
const {findAll, findById, insert, update, remove} = require('../controller/song.controller'); 

// -------------------------
// module functions

// define API endpoints

const loadSongRoutes = (app ) => {
    // GET: find all songs
    app.get('/songs', findAll);
    // GET: find song by ID
    app.get('/songs/:id', findById);
    // POST
    app.post('/songs', insert);
    // PUT
    app.put('/songs/:id', update);
    // DELETE
    app.delete('/songs/:id', remove);
}

// -------------------------
// module exports
module.exports = loadSongRoutes;