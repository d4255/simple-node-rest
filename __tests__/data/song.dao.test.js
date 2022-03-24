const dao = require("../../src/data/song.dao");
const db = require("../../src/data/datastore");

jest.mock("../../src/data/datastore", () => ({
  get: jest.fn(),
  set: jest.fn(),
  delete: jest.fn(),
  keys: jest.fn(),
  values: jest.fn(),
}));

// Unit test suite for the song DAO
describe("Unit test suite for song.dao", () => {
  // Test definitions
  test("Test get(key) - success", () => {
    // arrange and act
    const key = 1;
    const json = {
      id: 1,
      title: "La Mer (Beyond the Sea)",
      artist: "Bobby Darin",
      url: "https://www.youtube.com/watch?v=m8OlDPqYBLw",
    };
    db.get.mockReturnValue(json);

    // assert
    expect(dao.get(key)).toEqual(json);
  });

  test("Test getAll() - success", () => {
    //arrange and act
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
    db.values.mockReturnValue(json);

    //assert
    expect(dao.getAll()).toEqual(json);
  });

  test("Test save(key, value) - success", () => {
    // arrange and act
    const key = 1;
    const json = {
      id: 1,
      title: "La Mer (Beyond the Sea)",
      artist: "Bobby Darin",
      url: "https://www.youtube.com/watch?v=m8OlDPqYBLw",
    };
    db.set.mockReturnValue(json);

    //assert
    expect(dao.save(key, json)).toEqual(json);
  });

  test("Test remove(key) - success", () => {
    // arrange and act
    const key = 1;
    db.delete.mockReturnValue(true);

    //assert
    expect(dao.remove(key)).toBeTruthy();
  });

  test("Test nextId() returns the next numeric given an existing sequence - success", () => {
    // arrance and act
    const result = 9;
    const keysArray = [1, 3, 5, 6, 7, 8];
    db.keys.mockReturnValue(keysArray);

    // assert
    expect(dao.nextId()).toEqual(result);
  });

  test("Test nextId() returns the next numeric ID for empty datastore - success", () => {
    // arrance and act
    const result = 1;
    const keysArray = [];
    db.keys.mockReturnValue(keysArray);

    // assert
    expect(dao.nextId()).toEqual(result);
  });
});
