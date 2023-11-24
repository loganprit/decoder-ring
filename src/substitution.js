// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function isAlphabetUnique(alphabet) {
    let counter = {};
  
    for (let i = 0; i < alphabet.length; i++) {
      const character = alphabet[i];
  
      // Initialize the character count to 0 if it doesn't exist in the counter object
      if (!counter[character]) {
        counter[character] = 1;
      } else {
        // If character exists in object already, it's not unique
        return false;
      }
    }
  
    // If no duplicates were found, return true
    return true;
  }

// This function creates two objects for encoding and decoding.
function createSubstitutionObjects(standardAlphabet, substitutionAlphabet) {
  const encodeObject = {}; // Map standardAlphabet to substitutionAlphabet
  const decodeObject = {}; // Map substitutionAlphabet to standardAlphabet

  for (let i = 0; i < standardAlphabet.length; i++) {
    const standardLetter = standardAlphabet[i];
    const substitutionLetter = substitutionAlphabet[i];

    // Populate the encoding and decoding objects with corresponding letters
    encodeObject[standardLetter] = substitutionLetter;
    decodeObject[substitutionLetter] = standardLetter;
  }

  // Return both objects.
  return { encodeObject, decodeObject };
}

  function substitution(input, alphabet, encode = true) {
    // Check the cipher for correct length and uniqueness
    if (alphabet === undefined || alphabet.length != 26 || !isAlphabetUnique(alphabet)) {
      return false;
    }

    // Make input lowercase
    input = input.toLowerCase();

    // Create the objects (ciphers) to reference for encoding and decoding
    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const { encodeObject, decodeObject } = createSubstitutionObjects(standardAlphabet, alphabet);
    // Initialize output
    let output = '';

    for (const char of input.toLowerCase()) {
      if (char === ' ' || (!standardAlphabet.includes(char) && !alphabet.includes(char))) {
        // If it's a space or not a letter in either alphabet
        output += char;
      } else {
        // Otherwise, use the encode/decode object to substitute the character
        if (encode) {
          output += encodeObject[char];
        } else {
          output += decodeObject[char];
        }
    }
  }
  return output;
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
