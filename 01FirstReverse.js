function FirstReverse(str) {
  var str = str.split("") // turns the String into an Array
               .reverse() // reverses the order of the Array
               .join(""); // turns the Array back into a String
  return str;
}