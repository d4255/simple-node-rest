// -------------------------
// module dependencies
const express = require('express');
const songRoutes = require('./routes/song.routes');

// -------------------------
// module variables
const app = express();

// configure runtime environment
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(songRoutes);

// -------------------------
// module exports
module.exports = app;
