// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    /*
    If the shift value doesn't exist, is equal to 0,
    or is not between -25 and 25, return false
    */
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    // If false, decoder should undo the encoder shift
    if (encode) {
      shift = shift;
    } else {
      shift = -shift;
    }

      // Create arrays for the alphabet, input, and outputs
      const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
      let output = "";

      for (let i = 0; i < input.length; i++) {
        const character = input[i].toLowerCase();
        // Find index of the character in the alphabet
        const index = alphabet.indexOf(character);
    
        // Checks if character isn't a letter in the alphabet
        if (index === -1) {
          // Character is not a letter, so it's preserved
          output += input[i];
        } else {
          // Find the shifted index value
          let shiftedIndex = (index + shift + 26) % 26; // Wrap the index if necessary
          output += alphabet[shiftedIndex];
        }
      }
      return output
    }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
