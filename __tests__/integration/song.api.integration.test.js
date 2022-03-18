const express = require("express");
const request = require("supertest");
const fs = require('fs');
const loadSongRoutes = require("../../src/routes/song.routes");
const instance = require("../../src/data/datastore");

// configure and create runtime environment context
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
loadSongRoutes(app);

beforeEach(() => {
    try {
        const file_descriptor = fs.openSync("./__data__/db.json");
        const songs = JSON.parse(fs.readFileSync(file_descriptor, 'utf8'));
        songs.forEach(song => instance.set(String(song.id), song));
        fs.closeSync(file_descriptor);
    } catch (err) {
        console.error(err);
    }
})

afterEach(() => {
    instance.clear();
})


// Integrtion tests for the song API endpoints
describe("Integration tests for song API endpoints", () => {

    // Test definitions
    test ("POST /songs - success", async () => {
        // arange and act
        const url = "/songs";
        const input = {
            "title": "I Only Have Eyes for You",
            "artist": "The Flamingos",
            "url": "https://www.youtube.com/watch?v=1_urvud-Oi0"
        };
        const result = {
            "id": (instance.size + 1),
            "title": "I Only Have Eyes for You",
            "artist": "The Flamingos",
            "url": "https://www.youtube.com/watch?v=1_urvud-Oi0"
        };
    
        let response = await request(app).post(url).send(input);

        //assert
        expect(response.body).toEqual(result);
    })

    test ("GET /songs - success", async () => {
        // arange and act
        const url = "/songs";
        const result = JSON.parse(fs.readFileSync('./__data__/db.json', 'utf8'));
    
        let response = await request(app).get(url);

        //assert
        expect(response.body).toEqual(result);
    })

    test ("PUT /songs/:id - success", async () => {
        // arange and act
        const url = "/songs/2";
        const input = {
            "id": 2,
            "title": "I Only Have Eyes for You",
            "artist": "The Flamingos",
            "url": "https://www.youtube.com/watch?v=1_urvud-Oi0"
        };
    
        let response = await request(app).put(url).send(input);

        //assert
        expect(response.body).toEqual(input);
    })

    test ("GET /songs/:id - success", async () => {
        console.log(instance);
        // arange and act
        const url = "/songs/1";
        const result = {
            "id": 1,
            "title": "La Mer (Beyond the Sea)",
            "artist": "Bobby Darin",
            "url": "https://www.youtube.com/watch?v=m8OlDPqYBLw"
        };
    
        let response = await request(app).get(url);

        //assert
        expect(response.body).toEqual(result);
    })

    test ("DELETE /songs/:id - success", async () => {
        // arange and act
        const url = "/songs/1";
        const status = 200;
    
        let response = await request(app).delete(url);

        //assert
        expect(response.statusCode).toEqual(status);
    })

})