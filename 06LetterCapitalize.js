function LetterCapitalize(str) {
  var array = str.split(" "); // String to Array of words

  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase()  // capitalizes first letter of word
               + array[i].slice(1);              // adds rest of the letters, replaces word with capitalized version
  }

  return array.join().replace(/,/g, " ");        // Array to String replacing commas with spaces
}