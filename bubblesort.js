const swap = function(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const bubbleSort = function(arr, counterObject) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
        counterObject.swapCounter++;
      }
      counterObject.comparisonCounter++;
    }
  }
  return arr;
}
