const service = require("../../src/service/song.service");
const dao = require("../../src/data/song.dao");
const validator = require("../../src/service/json.validator");

jest.mock("../../src/data/song.dao", () => ({
  get: jest.fn(),
  getAll: jest.fn(),
  nextId: jest.fn(),
  save: jest.fn(),
  remove: jest.fn(),
}));

jest.mock("../../src/service/json.validator", () => ({
  validateSongJSON: jest.fn(),
}));

// Unit test suite for the song service
describe("Unit tests for song.service", () => {
  // Test definitions
  test("Test findById(id) - success", () => {
    // arrange and act
    const id = 1;
    const json = {
      id: 1,
      title: "La Mer (Beyond the Sea)",
      artist: "Bobby Darin",
      url: "https://www.youtube.com/watch?v=m8OlDPqYBLw",
    };
    dao.get.mockReturnValue(json);

    // assert
    expect(service.findById(id)).toEqual(json);
  });

  test("Test findAll() - success", () => {
    // arrange and act
    const json = [
      {
        id: 1,
        title: "La Mer (Beyond the Sea)",
        artist: "Bobby Darin",
        url: "https://www.youtube.com/watch?v=m8OlDPqYBLw",
      },
      {
        id: 2,
        title: "La Bomba",
        artist: "Ritchie Valens",
        url: "https://www.youtube.com/watch?v=Jp6j5HJ-Cok",
      },
      {
        id: 3,
        title: "Rave On!",
        artist: "Buddy Holly",
        url: "https://www.youtube.com/watch?v=0IUV-QxwlRM",
      },
    ];
    dao.getAll.mockReturnValue(json);

    // assert
    expect(service.findAll()).toEqual(json);
  });

  test("Test save(id, song) - success", () => {
    // arrange and act
    const id = 1;
    const json = {
      id: 1,
      title: "La Mer (Beyond the Sea)",
      artist: "Bobby Darin",
      url: "https://www.youtube.com/watch?v=m8OlDPqYBLw",
    };
    validator.validateSongJSON.mockReturnValue(json);
    dao.save.mockReturnValue(json);

    // assert
    expect(service.save(id, json)).toEqual(json);
  });

  test("Test save(undefined, song) - success", () => {
    // arrange and act
    const id = 1;
    const json = {
      id: 1,
      title: "La Mer (Beyond the Sea)",
      artist: "Bobby Darin",
      url: "https://www.youtube.com/watch?v=m8OlDPqYBLw",
    };
    dao.nextId.mockReturnValue(id);
    validator.validateSongJSON.mockReturnValue(json);
    dao.save.mockReturnValue(json);

    // assert
    expect(service.save(undefined, json)).toEqual(json);
  });

  test("Test save(id, song) where id != song.id - throws `Bad request.` error", () => {
    // arrange and act
    const id = 2;
    const json = {
      id: 1,
      title: "La Mer (Beyond the Sea)",
      artist: "Bobby Darin",
      url: "https://www.youtube.com/watch?v=m8OlDPqYBLw",
    };

    // assert
    expect(() => {
      service.save(id, json);
    }).toThrow("Bad request.");
  });

  test("Test save(id, song) invalid json - throws error", () => {
    // arrange and act
    const id = 1;
    const json = {
      id: 1,
    };

    // assert
    expect(() => {
      service.save(id, json);
    }).toThrow();
  });

  test("Test removeById(id) - success", () => {
    // arrange and act
    const id = 1;
    dao.remove.mockReturnValue(true);

    //assert
    expect(service.removeById(id)).toBeTruthy();
  });
});
