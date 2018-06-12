function split(wholeArray) {
  let midPoint = wholeArray.length / 2;

  let firstHalf = wholeArray.slice(0, midPoint);
  let secondHalf = wholeArray.slice(midPoint, wholeArray.length);

  return [firstHalf, secondHalf];
}

function merge(left, right) {
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    }
    else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while(left[leftIndex]) {
    mergedArray.push(left[leftIndex]);
    leftIndex++;
  }

  while(right[rightIndex]) {
    mergedArray.push(right[rightIndex]);
    rightIndex++;
  }

  return mergedArray;
}

function mergeSort(arr) {

  if (arr.length < 2) {
    return arr;
  }
  else {
    let splitArray = split(arr); // array of split arrays
    return merge(mergeSort(splitArray[0]), mergeSort(splitArray[1]));
  }
}
