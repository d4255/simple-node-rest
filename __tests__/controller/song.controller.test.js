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

const mockRequest = (sessionData) => {
    return {
        session: { data: sessionData },
    };
}

const mockResponse = () => {
    const res = {
        status: function(code) {
            return this; 
        }
    };
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
}

// Unit test suite for the song controller
describe("Unit tests for song.controller", () => {

    // Test definitions
    test("Test findAll() - success", async () => {
        // arrange and act
        const req = mockRequest();
        const res = mockResponse();
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
        res.text = json;
        service.findAll.mockReturnValue(res);

        await controller.findAll(req, res)

        // assert
        expect(res.text).toEqual(json);
    });

    test("Test findById() - success", async () => {
        // arrange and act
        const req = mockRequest();
        const res = mockResponse();
        const id = 1;        
        const json = {
            "id": 1,
            "title": "La Mer (Beyond the Sea)",
            "artist": "Bobby Darin",
            "url": "https://www.youtube.com/watch?v=m8OlDPqYBLw"
        };

        req.params = { "id": 1 }
        res.text = json;

        service.findById.mockReturnValue(res);

        await controller.findById(req, res)

        // assert
        expect(res.text).toEqual(json);
    });

    test("Test remove() - success", async () => {
        // arrange and act
        const req = mockRequest();
        const res = mockResponse();
        const id = 1;
        const success = 200;

        req.params = { "id": 1 }
        res.responseStatus = success;
        service.removeById.mockReturnValue(true);

        await controller.remove(req, res)

        // assert
        expect(res.responseStatus).toEqual(success);
    });

})