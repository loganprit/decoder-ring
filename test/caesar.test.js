const expect = require("chai").expect;
const caesarModule = require("../src/caesar.js");
const caesar = caesarModule.caesar;

describe("caesar() submission tests written by Logan", () => {
    describe("error handling", () => {
        it("should return false if the shift amount is 0", () => {
            expect(caesar("thinkful", 0)).equal(false);
          });
          it("should return false if the shift amount is above 25", () => {
            expect(caesar("thinkful", 30)).equal(false);
          });
          it("should return false if the shift amount is below 25", () => {
            expect(caesar("thinkful", -30)).equal(false);
          });
    })
    describe("encoding a message", () => {
        it("should encode a message by shifting the letters", () => {
            expect(caesar("thinkful", 3)).equal('wklqnixo');
        });     
        it("should leave spaces and other symbols as is", () => {
            expect(caesar("thinkful thinkful thinkful", 3)).equal('wklqnixo wklqnixo wklqnixo');
        });     
        it("should ignore capital letters", () => {
            expect(caesar("THINKFUL", 3)).equal('wklqnixo');
        });        
        it("should appropriately handle letters at the end of the alphabet", () => {
            expect(caesar("zebra", 3)).equal('cheud');
        });  
        it("should allow for a negative shift that will shift to the left", () => {
            expect(caesar("thinkful", -3)).equal('qefkhcri');
        });    
    })
    describe("decoding a message", () => {
        it("should decode a message by shifting the letters in the opposite direction", () => {
            expect(caesar("wklqnixo", 3, false)).equal('thinkful');
        });
        it("should leave spaces and other symbols as is", () => {
            expect(caesar("wklqnixo wklqnixo wklqnixo", 3, false)).equal('thinkful thinkful thinkful');
        }); 
        it("should ignore capital letters", () => {
            expect(caesar("Wklqnixo", 3, false)).equal('thinkful');
        });
        it("should appropriately handle letters at the end of the alphabet", () => {
            expect(caesar("cheud", 3, false)).equal('zebra');
        });  
        it("should allow for a negative shift tht will shift to the left", () => {
            expect(caesar("qefkhcri", -3, false)).equal('thinkful');
        }); 
    })
});
