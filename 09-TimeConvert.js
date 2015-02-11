function TimeConvert(num) {
  var hrs = Math.floor(num / 60); // Divides by 60 minutes and rounds down to whole hour
  var mins = num % 60; // Finds remainder minutes 
  return hrs + ":" + mins; // Formats to hrs:mins
}