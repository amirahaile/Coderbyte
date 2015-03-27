function ArithGeo(arr) { 
  var pattern = -1;
  var isAritmethic = true;
  var isGeometric = true;
  
  for (var j=0; j<1000; j++) {
    if (arr[0] + j === arr[1]) {
      for (var i=1; i<arr.length-1; i++) {
       if (arr[i] + j != arr[i+1]) {
         isAritmethic = false;
        }
      }
    }
    
    if (arr[0] * j === arr[1]) {
      for (var i=1; i<arr.length-1; i++) {
       if (arr[i] * j != arr[i+1]) {
         isGeometric = false;
        }
      }
	  }
  }
  
  if (isAritmethic) {
    pattern = "Arithmetic";
  } else if (isGeometric) {
    pattern = "Geometric";
  }
  
  return pattern;
}
