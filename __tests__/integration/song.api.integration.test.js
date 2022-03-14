const express = require("express");
const request = require("supertest");
const loadSongRoutes = require("../../src/routes/song.routes");

// configure and create runtime environment context
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
loadSongRoutes(app);

// Integrtion tests for the song API endpoints
describe("Integration tests for song API endpoints", () => {

    // Test definitions
    test ("POST /songs - success", async () => {
        // arange and act
        const url = "/songs";
        const input = {
            "title": "La Mer (Beyond the Sea)",
            "artist": "Bobby Darin",
            "url": "https://www.youtube.com/watch?v=m8OlDPqYBLw"
        };
        const result = {
            "id": 1,
            "title": "La Mer (Beyond the Sea)",
            "artist": "Bobby Darin",
            "url": "https://www.youtube.com/watch?v=m8OlDPqYBLw"
        };
    
        let response = await request(app).post(url).send(input);

        //assert
        expect(response.body).toEqual(result);
    })

    test ("GET /songs - success", async () => {
        // arange and act
        const url = "/songs";
        const result = [{
            "id": 1,
            "title": "La Mer (Beyond the Sea)",
            "artist": "Bobby Darin",
            "url": "https://www.youtube.com/watch?v=m8OlDPqYBLw"
        }];
    
        let response = await request(app).get(url);

        //assert
        expect(response.body).toEqual(result);
    })

    test ("PUT /songs/:id - success", async () => {
        // arange and act
        const url = "/songs/1";
        const input = {
            "id": 1,
            "title": "Rave On!",
            "artist": "Buddy Holly",
            "url": "https://www.youtube.com/watch?v=0IUV-QxwlRM"
        };
    
        let response = await request(app).put(url).send(input);

        //assert
        expect(response.body).toEqual(input);
    })

    test ("GET /songs/:id - success", async () => {
        // arange and act
        const url = "/songs/1";
        const result = {
            "id": 1,
            "title": "Rave On!",
            "artist": "Buddy Holly",
            "url": "https://www.youtube.com/watch?v=0IUV-QxwlRM"
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