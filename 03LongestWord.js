function LongestWord(sen) {
  var words = sen.replace(/\W/g, ' ') // replaces non-characters with spaces
                 .split(" ");         // turns String into an Array 
  
  var longestWord = "";
  
  for (var i = 0; i < words.length; i++) {      // loops through each word in the array
    if (words[i].length > longestWord.length) { // compares for longest word
      longestWord = words[i];
    };
  };

  return longestWord;
}

/* Passes Coderbyte test BUT 2 issues:
1. `.replace(/\W/g, ' ')` makes "fun&!! time" into "funtime" and not "fun time"
2. the challenge asked that when two words' lengths equal, you return the 1st longest word
   (mine returns the second)
*/