function findRotatedIndex(arr, num) {
  let findP = findPivot(arr);
  if (findP > 0 && num >= arr[0] && num <= arr[findP - 1]) {
    return binarySearch(arr, num, 0, findP - 1);
  } else {
    return binarySearch(arr, num, findP, arr.length - 1);
  }
}

function binarySearch(arr, num, l, r) {
  while (l <= r) {
    let m = Math.floor((r + l) / 2);

    if (arr[m] === num) {
      return m;
    } else if (num < arr[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return -1;
}
function findPivot(arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] > arr[m + 1]) {
      return m + 1;
    } else if (arr[l] > arr[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
}

module.exports = findRotatedIndex;
