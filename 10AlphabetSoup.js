function AlphabetSoup(str) { 
  var letters = str.split("");
  letters.sort();
  return letters.join("");
}
