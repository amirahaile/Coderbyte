function VowelCount(str) {
  var array = str.split(""); // turns String into Array
  var vowels = [];           

  for (var i = 0; i < array.length; i++) {
    if (array[i].match(/[aeiou]/g))         // globally checks if character is a vowel
      vowels.push(array[i]);
  }

  return vowels.length;
}