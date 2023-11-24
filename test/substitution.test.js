const expect = require("chai").expect;
const substitutionModule = require("../src/substitution.js");
const substitution = substitutionModule.substitution;

describe("substitution() submission tests written by Logan", () => {
    describe("error handling", () => {
        it("should return false if the substitution alphabet is missing", () => {
            expect(substitution("thinkful")).equal(false);
        });     
        it("should return false if the substitution alphabet is not exactly 26 characters", () => {
            expect(substitution("thinkful", "short")).equal(false);
        });     
        it("should return false if the substitution alphabet does not contain unique characters", () => {
            expect(substitution("thinkful", "abcdefghijklmnopqrstuvwxxz")).equal(false);
        });            
    })
    describe("encoding a message", () => {
        it("should encode a message by using the given substitution alphabet", () => {
            expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).equal('jrufscpw');
        });     
         it("should work with any kind of key with unique characters", () => {
            expect(substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")).equal('y&ii$r&');
        });     
        it("should preserve spaces", () => {
            expect(substitution("thinkful thinkful", "xoyqmcgrukswaflnthdjpzibev")).equal('jrufscpw jrufscpw');
        });           
    })
    describe("decoding a message", () => {
        it("should decode a message by using the given substitution alphabet", () => {
            expect(substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)).equal('thinkful');
        });     
         it("should work with any kind of key with unique characters", () => {
            expect(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)).equal('message');
        });     
        it("should preserve spaces", () => {
            expect(substitution("jrufscpw jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)).equal('thinkful thinkful');
        });  
    })
});

/* substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'

substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"

substitution("thinkful", "short"); //> false
substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false
*/