function SwapCase(str) {
  var array = str.split(''); // turns the String into an Array
  
  for (var i = 0; i < array.length; i++) {
    if (array[i] === array[i].toLowerCase()) {   // checks if the character is lowercase
      array[i] = array[i].toUpperCase();         // if it is, transforms it to uppercase
    } else {
      array[i] = array[i].toLowerCase();         // if it isn't, transforms it to lowercase
    }
  }

  return array.join().replace(/,/g, ''); // turns Array into String and removes commas
}