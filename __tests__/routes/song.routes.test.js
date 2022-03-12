const express = require("express");
const loadSongRoutes = require("../../src/routes/song.routes");

jest.mock("../../src/controller/song.controller",
    () => ({
        findAllSongs: jest.fn(),
        findById: jest.fn(),
        insert: jest.fn(),
        update: jest.fn(),
        remove: jest.fn()
    })
);

// Unit tests for the song routes
describe("Unit tests for song.routes", () => {
    // declatations
    const app = {
        get: () => {},
        post: () => {},
        put: () => {},
        delete: () => {}
    }

    // Test definitions
    test("GET /songs route is received by the correct handler - success", () => {
        // arrange and act
        jest.spyOn(app, 'get');
        const controller = { findAllSongs: () => {} };
        loadSongRoutes(app, controller);

        // assert
        expect(app.get).toHaveBeenCalledWith('/songs', controller.findAllSongs);
    });

    test("GET /songs/:id route is received by the correct handler - success", () => {
        // arrange and act
        jest.spyOn(app, 'get');
        const controller = { findById: () => {} };
        loadSongRoutes(app, controller);

        // assert
        expect(app.get).toHaveBeenCalledWith('/songs/:id', controller.findById);
    });

    test("POST /songs route is received by the correct handler - success", () => {
        // arrange and act
        jest.spyOn(app, 'post');
        const controller = { insert: () => {} };
        loadSongRoutes(app, controller);

        // assert
        expect(app.post).toHaveBeenCalledWith('/songs', controller.insert);
    });

    test("PUT /songs/:id route is received by the correct handler - success", () => {
        // arrange and act
        jest.spyOn(app, 'put');
        const controller = { update: () => {} };
        loadSongRoutes(app, controller);

        // assert
        expect(app.put).toHaveBeenCalledWith('/songs/:id', controller.update);
    });

    test("DELETE /songs/:id route is received by the correct handler - success", () => {
        // arrange and act
        jest.spyOn(app, 'delete');
        const controller = { remove: () => {} };
        loadSongRoutes(app, controller);

        // assert
        expect(app.delete).toHaveBeenCalledWith('/songs/:id', controller.remove);
    });

})