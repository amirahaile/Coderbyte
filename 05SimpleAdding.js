function SimpleAdding(num) {
  var total = 0;
  for (var i = 0; i <= num; i++) // loops through numbers up to and including `num`
    total += i;                  // adds them all together
  return total; 
}