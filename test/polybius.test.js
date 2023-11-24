const expect = require("chai").expect;
const polybiusModule = require("../src/polybius.js");
const polybius = polybiusModule.polybius;

describe("polybius() submission tests written by Logan", () => {
    describe("encoding a message", () => {
        it("should encode a message by translating each letter to number pairs", () => {
            expect(polybius("thinkful")).equal('4432423352125413');
        });     
        it("should translate both 'i' and 'j' to 42", () => {
            expect(polybius("thijnkful")).equal('443242423352125413');
        });     
        it("should leave spaces as is", () => {
            expect(polybius("thinkful thinkful", 3)).equal('4432423352125413 4432423352125413');
        });            
    })
    describe("decoding a message", () => {
        it("should decode a message by translating each pair of numbers into a letter", () => {
            expect(polybius("4432423352125413", false)).equal('th(i/j)nkful');
        });
        it("should translate 42 into both 'i' and 'j'", () => {
            expect(polybius("4432423352125413", false)).equal('th(i/j)nkful');
        }); 
        it("should leave spaces as is", () => {
            expect(polybius("3251131343 2543241341", false)).equal('hello world');
        });
        it("should return false if the length of all numbers is odd", () => {
            expect(polybius("44324233521254134", false)).equal(false);
        });  
    })
});
