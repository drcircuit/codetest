var list = require("./list");
var assert = require("assert");
var hidden = require("./theSecret.js");

describe("the non iterable list function", function () {
    it("should exist", function () {
        assert.notEqual(list, null);
    });
    describe("an empty list", function () {
        var testList;
        beforeEach(function () {
            testList = list();
        });
        it("should start new values at index 1", function () {
            testList.add(42);
            assert.equal(testList.get(1), 42);
        });
        it("should be able to store at any index above 0", function () {
            testList.storeAt(12, 62);
            testList.storeAt(42, 69);
            assert.equal(testList.get(12), 62);
            assert.equal(testList.get(42), 69);
        });
        it("can you reveal the hidden secret at index 0 from the internal list?", function () {
            var secret = "not the secret you are looking for...";
            // ... your code here ... //
            assert.equal(secret, hidden, secret);
            console.log(secret);
        })
    });
});