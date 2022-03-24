const validator = require("../../src/service/json.validator");

// Unit test suite for the json validator
describe("Unit tests for json.validator", () => {
  // Test definitions
  test("validate song json - success", () => {
    // arrange and act
    const input = {
      id: 1,
      title: "La Mer (Beyond the Sea)",
      artist: "Bobby Darin",
      url: "https://www.youtube.com/watch?v=m8OlDPqYBLw",
    };
    const result = {
      id: 1,
      title: "La Mer (Beyond the Sea)",
      artist: "Bobby Darin",
      url: "https://www.youtube.com/watch?v=m8OlDPqYBLw",
    };

    // assert
    expect(validator.validateSongJSON(input)).toEqual(result);
  });

  test("validate song json with extra fields - success", () => {
    // arrange and act
    const input = {
      id: 1,
      title: "La Mer (Beyond the Sea)",
      artist: "Bobby Darin",
      album: "Boddy Darin (Original Album Plus Bonus Tracks)",
      year: 1959,
      url: "https://www.youtube.com/watch?v=m8OlDPqYBLw",
    };
    const result = {
      id: 1,
      title: "La Mer (Beyond the Sea)",
      artist: "Bobby Darin",
      url: "https://www.youtube.com/watch?v=m8OlDPqYBLw",
    };

    // assert
    expect(validator.validateSongJSON(input)).toEqual(result);
  });

  test("validate undefined input - returns undefined", () => {
    // arrange and act
    const input = undefined;
    const result = undefined;

    // assert
    expect(validator.validateSongJSON(input)).toEqual(result);
  });

  test("validate song with no ID - throws `ID is required.` error", () => {
    // arrange and act
    const input = {
      title: "La Mer (Beyond the Sea)",
      artist: "Bobby Darin",
      url: "https://www.youtube.com/watch?v=m8OlDPqYBLw",
    };

    // assert
    expect(() => {
      validator.validateSongJSON(input);
    }).toThrow("ID is required.");
  });

  test("validate song with no title - throws `Title is required.` error", () => {
    // arrange and act
    const input = {
      id: 1,
      artist: "Bobby Darin",
      url: "https://www.youtube.com/watch?v=m8OlDPqYBLw",
    };

    // assert
    expect(() => {
      validator.validateSongJSON(input);
    }).toThrow("Title is required.");
  });

  test("validate song with no artist - throws `Artist is required.` error", () => {
    // arrange and act
    const input = {
      id: 1,
      title: "La Mer (Beyond the Sea)",
      url: "https://www.youtube.com/watch?v=m8OlDPqYBLw",
    };

    // assert
    expect(() => {
      validator.validateSongJSON(input);
    }).toThrow("Artist is required.");
  });
});
