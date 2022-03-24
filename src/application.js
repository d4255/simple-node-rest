// -------------------------
// module dependencies
const express = require("express");
const loadSongRoutes = require("./routes/song.routes");

// -------------------------
// module variables
const app = express();

// configure runtime environment
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
loadSongRoutes(app);

// -------------------------
// module exports
module.exports = app;
