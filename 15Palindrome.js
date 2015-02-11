function Palindrome(str) {
  var strNoSpaces = str.replace(/ /g, '');       // replaces spaces (' ') with no spaces ('')
  var reverseStrNoSpaces = strNoSpaces.split('') // turns String into Array
                                      .reverse() // `.reverse()` only works on Arrays
                                      .join();   // back into a String

  if (strNoSpaces === reverseStrNoSpaces)
    return true;
  else 
    return false;
}