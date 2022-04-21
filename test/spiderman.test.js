const Spiderman = require('../app/spiderman')

describe("Unit Testing for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony Pictures")

        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
    });
})