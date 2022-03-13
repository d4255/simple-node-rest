const loadSongRoutes = require("../../src/routes/song.routes");
const { findAll, findById, insert, update, remove } = require('../../src/controller/song.controller');


// Unit test suite for the song routes
describe("Unit tests for song.routes", () => {
    let app;

    beforeEach(() => {
        jest.resetAllMocks();
        // declatations
        app = {
            get: jest.fn(),
            post: jest.fn(),
            put: jest.fn(),
            delete: jest.fn()
        }
    });

    // Test definitions
    test("GET /songs route is received by the correct handler - success", () => {
        // arrange and act
        loadSongRoutes(app);

        // assert
        expect(app.get.mock.calls[0]).toEqual(['/songs', findAll]);
    });

    test("GET /songs/:id route is received by the correct handler - success", () => {
        // arrange and act
        loadSongRoutes(app);

        // assert
        expect(app.get.mock.calls[1]).toEqual(['/songs/:id', findById]);
    });

    test("POST /songs route is received by the correct handler - success", () => {
        // arrange and act
        loadSongRoutes(app);

        // assert
        expect(app.post).toHaveBeenCalledWith('/songs', insert);
    });

    test("PUT /songs/:id route is received by the correct handler - success", () => {
        // arrange and act
        loadSongRoutes(app);

        // assert
        expect(app.put).toHaveBeenCalledWith('/songs/:id', update);
    });

    test("DELETE /songs/:id route is received by the correct handler - success", () => {
        // arrange and act
        loadSongRoutes(app);

        // assert
        expect(app.delete).toHaveBeenCalledWith('/songs/:id', remove);
    });
})