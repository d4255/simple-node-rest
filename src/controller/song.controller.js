// -------------------------
// module dependencies
const service = require("../service/song.service");

// -------------------------
// module functions
const findAll = async (req, res) => {
  const songs = await service.findAll();
  res.json(songs);
};

const findById = async (req, res) => {
  const song = await service.findById(req.params.id);
  !song ? res.status(404).send("Song not found.") : res.json(song);
};

const insert = async (req, res) => {
  let result;
  let status;
  let message;

  if (req.body && !req.body.id) {
    try {
      result = await service.save(null, req.body);
    } catch (e) {
      console.log(e);
      status = 400;
      message = e.message;
    }
  } else {
    status = 400;
    message = "Bad request.";
  }

  !result ? res.status(status).send(message) : res.json(result);
};

const update = async (req, res) => {
  let result = undefined;
  let status = 200;
  let message = "OK.";

  if (req.body && Number(req.body.id) === Number(req.params.id)) {
    try {
      result = await service.save(req.body.id, req.body);
    } catch (e) {
      console.log(e);
      status = 400;
      message = e.message;
    }
  } else {
    status = 400;
    message = "Bad request.";
  }

  !result ? res.status(status).send(message) : res.json(result);
};

const remove = async (req, res) => {
  const result = await service.removeById(req.params.id);

  !result
    ? res.status(404).send("Song not found.")
    : res.status(200).send("OK");
};

// -------------------------
// module exports
module.exports = { findAll, findById, insert, update, remove };
