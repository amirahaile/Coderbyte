function MeanMode(arr) { 
  arr.sort();
  var mode = arr[Math.round(arr.length / 2)];
  var sum = 0;
  
  for (var i=0; i<arr.length; i++){
    sum += arr[i];
  }
  
  var mean = sum / arr.length;
  
  if (mode === mean) {
    return 1;
  } else {
    return 0;
  }
}
