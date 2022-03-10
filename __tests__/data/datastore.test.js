const datastore = require('../../src/data/datastore');
const datastore2 = require("../../src/data/datastore");

// Unit tests for the datastore
describe ('Unit test suite for: datastore', () => {

    // Test definitions
    test ('Test getInstance() always returns a valid instance', () => {
        // arrange and act

        // assert
        expect(datastore).not.toBeUndefined;
        expect(datastore).not.toBeNull;
    });

    test ('Test getInstance() always returns a reference to the same instance', () => {
        // arrange and act

        //assert
        expect(datastore).toBe(datastore2);
    })

})