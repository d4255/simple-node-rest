const httpMocks = require('node-mocks-http');
const controller = require("../../src/controller/song.controller");
const service = require('../../src/service/song.service');

jest.mock("../../src/service/song.service", 
    () => ({
        findById: jest.fn(),
        findAll: jest.fn(),
        save: jest.fn(),
        removeById: jest.fn()
    })
);

// Unit test suite for the song controller
describe("Unit tests for song.controller", () => {

    // Test definitions
    test("Test findAll() - success", async () => {
        // arrange and act
        const req = httpMocks.createRequest({
            method: 'GET',
            url: '/songs'
        });
        const res = httpMocks.createResponse();
        const json = [{
            "id": 1,
            "title": "La Mer (Beyond the Sea)",
            "artist": "Bobby Darin",
            "url": "https://www.youtube.com/watch?v=m8OlDPqYBLw"
        },
        {
            "id": 2,
            "title": "La Bomba",
            "artist": "Ritchie Valens",
            "url": "https://www.youtube.com/watch?v=Jp6j5HJ-Cok"
        },
        {
            "id": 3,
            "title": "Rave On!",
            "artist": "Buddy Holly",
            "url": "https://www.youtube.com/watch?v=0IUV-QxwlRM"
        }];
        service.findAll.mockReturnValue(json);

        await controller.findAll(req, res);

        // assert
        expect(JSON.parse(res._getData())).toEqual(json);
    });

    test("Test findById() - success", async () => {
        // arrange and act
        const req = httpMocks.createRequest({
            method: 'GET',
            url: '/songs',
            params: { id: 1 }
        });
        const res = httpMocks.createResponse();
        const json = {
            "id": 1,
            "title": "La Mer (Beyond the Sea)",
            "artist": "Bobby Darin",
            "url": "https://www.youtube.com/watch?v=m8OlDPqYBLw"
        };
        service.findById.mockReturnValue(json);

        await controller.findById(req, res);

        // assert
        expect(JSON.parse(res._getData())).toEqual(json);
    });

    test("Test insert() - success", async () => {
        // arrange and act
        const req = httpMocks.createRequest({
            method: 'POST',
            url: '/songs',
            body: 
                {
                    "title": "La Mer (Beyond the Sea)",
                    "artist": "Bobby Darin",
                    "url": "https://www.youtube.com/watch?v=m8OlDPqYBLw"
                }
        });
        const res = httpMocks.createResponse();
        const response = {
            "id": 1,
            "title": "La Mer (Beyond the Sea)",
            "artist": "Bobby Darin",
            "url": "https://www.youtube.com/watch?v=m8OlDPqYBLw"
        }
        service.save.mockReturnValue(response);

        await controller.insert(req, res);

        // assert
        expect(JSON.parse(res._getData())).toEqual(response);
    });

    test("Test insert() with ID - fails", async () => {
        // arrange and act
        const status = 400;
        const req = httpMocks.createRequest({
            method: 'POST',
            url: '/songs',
            body: 
                {
                    "id": 1,
                    "title": "La Mer (Beyond the Sea)",
                    "artist": "Bobby Darin",
                    "url": "https://www.youtube.com/watch?v=m8OlDPqYBLw"
                }
        });
        const res = httpMocks.createResponse();
        service.save.mockReturnValue();

        await controller.insert(req, res);

        // assert
        expect(res._getStatusCode()).toEqual(status);
    });

    test("Test insert() with empty body - fails", async () => {
        // arrange and act
        const status = 400;
        const req = httpMocks.createRequest({
            method: 'POST',
            url: '/songs',
            body: { }
        });
        const res = httpMocks.createResponse();
        service.save.mockImplementation(() => { throw new Error('Bad request.') });

        await controller.insert(req, res);

        // assert
        expect(res._getStatusCode()).toEqual(status);
    });

    test("Test insert() with invalid json - fails", async () => {
        // arrange and act
        const status = 400;
        const req = httpMocks.createRequest({
            method: 'POST',
            url: '/songs',
            body: 
                {
                    "id": 1,
                    "url": "https://www.youtube.com/watch?v=m8OlDPqYBLw"
                }
        });
        const res = httpMocks.createResponse();
        service.save.mockImplementation(() => { throw new Error('Bad request.') });

        await controller.insert(req, res);

        // assert
        expect(res._getStatusCode()).toEqual(status);
    });

    test("Test update() - success", async () => {
        // arrange and act
        const req = httpMocks.createRequest({
            method: 'PUT',
            url: '/songs/1',
            params: 
                { 
                    id: 1 
                },
            body: 
                {
                    "id": 1,
                    "title": "La Mer (Beyond the Sea)",
                    "artist": "Bobby Darin",
                    "url": "https://www.youtube.com/watch?v=m8OlDPqYBLw"
                }
        });
        const res = httpMocks.createResponse();
        const response = {
            "id": 1,
            "title": "La Mer (Beyond the Sea)",
            "artist": "Bobby Darin",
            "url": "https://www.youtube.com/watch?v=m8OlDPqYBLw"
        }
        service.save.mockReturnValue(response);

        await controller.update(req, res)

        // assert
        expect(JSON.parse(res._getData())).toEqual(response);
    });

    test("Test update() with mismatched ID - fails", async () => {
        // arrange and act
        const status = 400;
        const req = httpMocks.createRequest({
            method: 'PUT',
            url: '/songs/1',
            params: { id: 1 },
            body: 
                {
                    "id": 2,
                    "title": "La Mer (Beyond the Sea)",
                    "artist": "Bobby Darin",
                    "url": "https://www.youtube.com/watch?v=m8OlDPqYBLw"
                }
        });
        const res = httpMocks.createResponse();
        service.save.mockReturnValue();

        await controller.update(req, res);

        // assert
        expect(res._getStatusCode()).toEqual(status);
    });

    test("Test update() with empty body - fails", async () => {
        // arrange and act
        const status = 400;
        const req = httpMocks.createRequest({
            method: 'PUT',
            url: '/songs/1',
            body: { }
        });
        const res = httpMocks.createResponse();
        service.save.mockImplementation(() => { throw new Error('Bad request.') });

        await controller.update(req, res);

        // assert
        expect(res._getStatusCode()).toEqual(status);
    });

    test("Test update() with invalid json - fails", async () => {
        // arrange and act
        const status = 400;
        const req = httpMocks.createRequest({
            method: 'PUT',
            url: '/songs/1',
            params: { id: 1 },
            body: 
                {
                    "id": 1,
                    "url": "https://www.youtube.com/watch?v=m8OlDPqYBLw"
                }
        });
        const res = httpMocks.createResponse();
        service.save.mockImplementation(() => { throw new Error('Bad request.') });

        await controller.update(req, res);

        // assert
        expect(res._getStatusCode()).toEqual(status);
    });

    test("Test remove() - success", async () => {
        // arrange and act
        const status = 200;
        const req = httpMocks.createRequest({
            method: 'DELETE',
            url: '/songs/1',
            params: { id: 1 }
        });
        const res = httpMocks.createResponse();
        service.removeById.mockReturnValue(true);

        await controller.remove(req, res)

        // assert
        expect(res._getStatusCode()).toEqual(status);
    });

})