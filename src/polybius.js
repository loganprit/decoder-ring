// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // define the polybiusSquare, its inverse, and output
    const polybiusSquare = {
      'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51',
      'f': '12', 'g': '22', 'h': '32', 'i': '42', 'j': '42', // 'i' and 'j' share the same code
      'k': '52', 'l': '13', 'm': '23', 'n': '33', 'o': '43',
      'p': '53', 'q': '14', 'r': '24', 's': '34', 't': '44',
      'u': '54', 'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55'
    };
    
    const polybiusSquareInverse = {
      '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e',
      '12': 'f', '22': 'g', '32': 'h', '42': '(i/j)',
      '52': 'k', '13': 'l', '23': 'm', '33': 'n', '43': 'o',
      '53': 'p', '14': 'q', '24': 'r', '34': 's', '44': 't',
      '54': 'u', '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z'
    };    
    let output = "";

    // If false, decoder should undo the encoder
    if (encode) {
      // Convert the input string to lowercase and initialize the output string
      input = input.toLowerCase();
      let output = "";

      // Loop through each character in the input
      for (let i = 0; i < input.length; i++) {
        const character = input[i];
    
        // Check if the character is a space
        if (character === " ") {
          output += character; // Concatenate space to output
        } else {
          // Look up the number in the polybiusSquare and concatenate it to output
          const num = polybiusSquare[character];
          if (num) {
            output += num;
          }
        }
      }
      return output;
    } else {
      // Split numbers by spaces
      const words = input.split(" ");
      let decodedWords = [];
      // Get length of the numbers. If not divisible by 2 (i.e. not even), it's not valid and should return false
      for (let word of words) {
        let decodedWord = "";
        if (word.length % 2 !== 0) return false;
        else {
          // Go through two numbers by a time
          for (let i = 0; i < word.length; i += 2) {
            const num = word.slice(i, i + 2);
            // Replace the number with the correct character
            const letter = polybiusSquareInverse[num];
            if (letter) {
              // Add letter to decodedWord
              decodedWord += letter;
            }
          }
          // Push completed decodedWord to decodedWords
          decodedWords.push(decodedWord);
        }
      }
      // At the end, combine all strings and separate by spaces
      let output = decodedWords.join(" ");
      return output;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
